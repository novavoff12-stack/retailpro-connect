import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { LogOut, Bot as BotIcon, Copy, Check } from "lucide-react";

interface Bot {
  id: string;
  application_id: string;
  public_key: string;
  bot_token: string;
  bot_name: string | null;
  status: string;
}

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [bot, setBot] = useState<Bot | null>(null);
  const [fetching, setFetching] = useState(true);
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState(false);

  // form state
  const [appId, setAppId] = useState("");
  const [pubKey, setPubKey] = useState("");
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (!loading && !user) navigate("/", { replace: true });
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("bots")
      .select("*")
      .eq("owner_user_id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          setBot(data as Bot);
          setAppId(data.application_id);
          setPubKey(data.public_key);
          setToken(data.bot_token);
          setName(data.bot_name ?? "");
        }
        setFetching(false);
      });
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    if (!appId || !pubKey || !token) {
      toast.error("Application ID, Public Key and Bot Token are required");
      return;
    }
    setSaving(true);
    const payload = {
      owner_user_id: user.id,
      application_id: appId.trim(),
      public_key: pubKey.trim(),
      bot_token: token.trim(),
      bot_name: name.trim() || null,
      status: "active",
    };
    const { data, error } = await supabase
      .from("bots")
      .upsert(payload, { onConflict: "owner_user_id" })
      .select()
      .single();
    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setBot(data as Bot);
    toast.success("Bot saved");
  };

  const interactionsUrl = bot
    ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/discord-interactions?bot_id=${bot.id}`
    : "";

  const copyUrl = () => {
    navigator.clipboard.writeText(interactionsUrl);
    setCopied(true);
    toast.success("Copied");
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading || fetching) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <BotIcon className="h-6 w-6 text-accent" />
            <span className="font-bold">Modmail Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" /> Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 max-w-3xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Discord Bot</CardTitle>
            <CardDescription>
              Configure your Discord application credentials. Each user runs one bot.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Bot name (optional)</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="My Modmail Bot" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="appId">Application ID</Label>
              <Input id="appId" value={appId} onChange={(e) => setAppId(e.target.value)} placeholder="123456789012345678" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pubKey">Public Key</Label>
              <Input id="pubKey" value={pubKey} onChange={(e) => setPubKey(e.target.value)} placeholder="abcdef..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="token">Bot Token</Label>
              <Input id="token" type="password" value={token} onChange={(e) => setToken(e.target.value)} placeholder="MTI..." />
            </div>
            <Button onClick={handleSave} disabled={saving} className="w-full">
              {saving ? "Saving…" : bot ? "Update bot" : "Create bot"}
            </Button>
          </CardContent>
        </Card>

        {bot && (
          <Card>
            <CardHeader>
              <CardTitle>Interactions Endpoint</CardTitle>
              <CardDescription>
                Paste this into your Discord application's "Interactions Endpoint URL".
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-xs bg-secondary p-3 rounded-md break-all">{interactionsUrl}</code>
                <Button size="icon" variant="outline" onClick={copyUrl}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
