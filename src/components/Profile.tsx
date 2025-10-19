import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const Profile = () => {
  const achievements = [
    { icon: 'Trophy', title: 'Отличник месяца', color: 'from-yellow-500 to-orange-500' },
    { icon: 'Star', title: 'Без пропусков', color: 'from-blue-500 to-cyan-500' },
    { icon: 'Award', title: 'Лучший в математике', color: 'from-purple-500 to-pink-500' },
    { icon: 'Zap', title: 'Быстрый старт', color: 'from-green-500 to-emerald-500' },
  ];

  const statistics = [
    { label: 'Всего занятий', value: '156', icon: 'BookOpen' },
    { label: 'Пропущено', value: '2', icon: 'AlertCircle' },
    { label: 'Средний балл', value: '4.8', icon: 'TrendingUp' },
    { label: 'Выполнено ДЗ', value: '98%', icon: 'CheckCircle2' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Личный профиль</h2>
          <p className="text-muted-foreground mt-1">Управляй своим аккаунтом</p>
        </div>
        <Button variant="outline" className="border-border">
          <Icon name="LogOut" size={18} className="mr-2" />
          Выйти
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 p-6 bg-card/50 backdrop-blur border-border/50">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl">
              👨‍🎓
            </div>
            <h3 className="text-2xl font-bold mb-1">Александр Петров</h3>
            <p className="text-muted-foreground mb-4">alex.petrov@example.com</p>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Camera" size={18} className="mr-2" />
              Изменить фото
            </Button>
          </div>

          <Separator className="my-6" />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Роль</span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-500">
                Администратор
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Статус</span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-500">
                Активен
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Класс</span>
              <span className="font-semibold">11-А</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">ID</span>
              <span className="font-mono text-sm">#2025001</span>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <h3 className="text-xl font-bold mb-6">Личная информация</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Имя</Label>
                <Input id="firstName" defaultValue="Александр" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Фамилия</Label>
                <Input id="lastName" defaultValue="Петров" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="alex.petrov@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" defaultValue="+7 (999) 123-45-67" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthdate">Дата рождения</Label>
                <Input id="birthdate" type="date" defaultValue="2007-05-15" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="class">Класс</Label>
                <Input id="class" defaultValue="11-А" />
              </div>
            </div>
            <Button className="mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Save" size={18} className="mr-2" />
              Сохранить изменения
            </Button>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <h3 className="text-xl font-bold mb-6">Статистика</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-muted/50 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon name={stat.icon as any} size={24} className="mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <h3 className="text-xl font-bold mb-6">Достижения</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-muted/50 text-center hover:scale-105 transition-transform duration-200 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center`}>
                    <Icon name={achievement.icon as any} size={32} className="text-white" />
                  </div>
                  <p className="text-sm font-semibold">{achievement.title}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
        <h3 className="text-xl font-bold mb-6">Безопасность</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="currentPassword">Текущий пароль</Label>
            <Input id="currentPassword" type="password" className="mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="newPassword">Новый пароль</Label>
              <Input id="newPassword" type="password" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
              <Input id="confirmPassword" type="password" className="mt-2" />
            </div>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Icon name="Lock" size={18} className="mr-2" />
            Изменить пароль
          </Button>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl">
            <Icon name="AlertTriangle" size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Опасная зона</h3>
            <p className="text-muted-foreground mb-4">
              Удаление аккаунта необратимо. Все твои данные будут потеряны.
            </p>
            <Button variant="destructive">
              <Icon name="Trash2" size={18} className="mr-2" />
              Удалить аккаунт
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
