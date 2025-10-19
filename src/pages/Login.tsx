import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface LoginProps {
  onLogin: (userData: any) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.example.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        onLogin(userData);
        toast({
          title: 'Добро пожаловать!',
          description: `Вы вошли как ${userData.first_name} ${userData.last_name}`,
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Ошибка входа',
          description: 'Неверный email или пароль',
        });
      }
    } catch (error) {
      const testUsers = [
        { email: 'admin@school.com', password: 'admin123', role: 'admin', first_name: 'Александр', last_name: 'Петров', avatar_emoji: '👨‍💼' },
        { email: 'teacher@school.com', password: 'teacher123', role: 'teacher', first_name: 'Мария', last_name: 'Иванова', avatar_emoji: '👩‍🏫' },
        { email: 'student@school.com', password: 'student123', role: 'student', first_name: 'Дмитрий', last_name: 'Смирнов', avatar_emoji: '👨‍🎓' },
      ];

      const user = testUsers.find(u => u.email === email && u.password === password);
      
      if (user) {
        onLogin(user);
        toast({
          title: 'Добро пожаловать!',
          description: `Вы вошли как ${user.first_name} ${user.last_name}`,
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Ошибка входа',
          description: 'Неверный email или пароль',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const demoAccounts = [
    { role: 'Администратор', email: 'admin@school.com', password: 'admin123', emoji: '👨‍💼', color: 'from-purple-500 to-pink-500' },
    { role: 'Учитель', email: 'teacher@school.com', password: 'teacher123', emoji: '👩‍🏫', color: 'from-blue-500 to-cyan-500' },
    { role: 'Ученик', email: 'student@school.com', password: 'student123', emoji: '👨‍🎓', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-950/20 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in">
          <div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Электронный Дневник
            </h1>
            <p className="text-xl text-muted-foreground">
              Современная система управления учебным процессом
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Card className="p-4 bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Безопасность</h3>
                  <p className="text-sm text-muted-foreground">Защита данных на всех уровнях</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Для всех участников</h3>
                  <p className="text-sm text-muted-foreground">Учителя, ученики, родители, администрация</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Быстро и удобно</h3>
                  <p className="text-sm text-muted-foreground">Интуитивный интерфейс для всех</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur border-border/50 animate-scale-in">
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl">
              🔐
            </div>
            <h2 className="text-2xl font-bold mb-2">Вход в систему</h2>
            <p className="text-muted-foreground">Введите свои учетные данные</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
                  Вход...
                </>
              ) : (
                <>
                  <Icon name="LogIn" size={18} className="mr-2" />
                  Войти
                </>
              )}
            </Button>
          </form>

          <div className="mt-6">
            <p className="text-sm text-center text-muted-foreground mb-3">Демо аккаунты для тестирования:</p>
            <div className="space-y-2">
              {demoAccounts.map((account, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setEmail(account.email);
                    setPassword(account.password);
                  }}
                  className="w-full p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${account.color} flex items-center justify-center text-xl`}>
                      {account.emoji}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{account.role}</p>
                      <p className="text-xs text-muted-foreground">{account.email}</p>
                    </div>
                    <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-primary hover:underline">
              Забыли пароль?
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
