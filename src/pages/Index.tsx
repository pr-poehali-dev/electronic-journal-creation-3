import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Schedule from '@/components/Schedule';
import Grades from '@/components/Grades';
import Homework from '@/components/Homework';
import Users from '@/components/Users';
import Profile from '@/components/Profile';

interface IndexProps {
  user: any;
  onLogout: () => void;
}

const Index = ({ user, onLogout }: IndexProps) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const allNavigation = [
    { id: 'dashboard', name: 'Главная', icon: 'Home', roles: ['admin', 'teacher', 'student', 'parent'] },
    { id: 'schedule', name: 'Расписание', icon: 'Calendar', roles: ['admin', 'teacher', 'student', 'parent'] },
    { id: 'grades', name: 'Оценки', icon: 'Trophy', roles: ['admin', 'teacher', 'student', 'parent'] },
    { id: 'homework', name: 'Домашние задания', icon: 'BookOpen', roles: ['admin', 'teacher', 'student'] },
    { id: 'users', name: 'Пользователи', icon: 'Users', roles: ['admin'] },
    { id: 'profile', name: 'Профиль', icon: 'User', roles: ['admin', 'teacher', 'student', 'parent'] },
  ];

  const navigation = allNavigation.filter(item => item.roles.includes(user?.role));

  const stats = [
    { title: 'Средний балл', value: '4.8', icon: 'TrendingUp', color: 'from-purple-500 to-pink-500' },
    { title: 'Выполнено ДЗ', value: '12/15', icon: 'CheckCircle2', color: 'from-blue-500 to-cyan-500' },
    { title: 'Пропущено', value: '2', icon: 'AlertCircle', color: 'from-orange-500 to-red-500' },
    { title: 'Активность', value: '92%', icon: 'Activity', color: 'from-green-500 to-emerald-500' },
  ];

  const recentGrades = [
    { subject: 'Математика', grade: 5, date: '18.10.2025', teacher: 'Иванова М.П.' },
    { subject: 'Русский язык', grade: 4, date: '18.10.2025', teacher: 'Петрова А.С.' },
    { subject: 'Физика', grade: 5, date: '17.10.2025', teacher: 'Сидоров К.В.' },
    { subject: 'История', grade: 5, date: '17.10.2025', teacher: 'Смирнова Е.Н.' },
  ];

  const upcomingClasses = [
    { time: '09:00', subject: 'Математика', room: '204', teacher: 'Иванова М.П.' },
    { time: '10:00', subject: 'Русский язык', room: '312', teacher: 'Петрова А.С.' },
    { time: '11:00', subject: 'Физика', room: '105', teacher: 'Сидоров К.В.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-950/20">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-card/50 backdrop-blur-xl border-r border-border/50 p-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Электронный Дневник
            </h1>
            <div className="flex items-center gap-2 mt-3 p-2 rounded-lg bg-muted/50">
              <div className="text-2xl">{user?.avatar_emoji || '👤'}</div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{user?.first_name} {user?.last_name}</p>
                <p className="text-xs text-muted-foreground capitalize">{user?.role === 'admin' ? 'Администратор' : user?.role === 'teacher' ? 'Учитель' : user?.role === 'student' ? 'Ученик' : 'Родитель'}</p>
              </div>
            </div>
          </div>

          <nav className="space-y-2">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 scale-105'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <Icon name={item.icon as any} size={20} />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-4">
            <Button
              onClick={onLogout}
              variant="outline"
              className="w-full border-border hover:bg-destructive/10 hover:text-destructive"
            >
              <Icon name="LogOut" size={18} className="mr-2" />
              Выйти
            </Button>
          </div>
        </aside>

        <main className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold">Добро пожаловать, {user?.first_name}! 👋</h2>
                  <p className="text-muted-foreground mt-1">Сегодня, 19 октября 2025</p>
                </div>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Bell" size={18} className="mr-2" />
                  Уведомления
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-gradient-to-br from-card to-card/50 backdrop-blur border-border/50 hover:scale-105 transition-transform duration-200 cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-3xl font-bold mt-2">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                        <Icon name={stat.icon as any} size={24} className="text-white" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 bg-card/50 backdrop-blur border-border/50 animate-slide-in">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Последние оценки</h3>
                    <Icon name="ArrowRight" size={20} className="text-muted-foreground" />
                  </div>
                  <div className="space-y-4">
                    {recentGrades.map((grade, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div>
                          <p className="font-semibold">{grade.subject}</p>
                          <p className="text-sm text-muted-foreground">{grade.teacher}</p>
                        </div>
                        <div className="text-right">
                          <div
                            className={`text-2xl font-bold ${
                              grade.grade === 5 ? 'text-green-500' : 'text-blue-500'
                            }`}
                          >
                            {grade.grade}
                          </div>
                          <p className="text-xs text-muted-foreground">{grade.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur border-border/50 animate-slide-in" style={{ animationDelay: '100ms' }}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Расписание на сегодня</h3>
                    <Icon name="Clock" size={20} className="text-muted-foreground" />
                  </div>
                  <div className="space-y-4">
                    {upcomingClasses.map((cls, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-muted/30 to-muted/50 border border-border/30"
                      >
                        <div className="flex-shrink-0 w-16 text-center">
                          <p className="text-lg font-bold text-primary">{cls.time}</p>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{cls.subject}</p>
                          <p className="text-sm text-muted-foreground">
                            Каб. {cls.room} • {cls.teacher}
                          </p>
                        </div>
                        <Icon name="MapPin" size={18} className="text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                    <Icon name="Lightbulb" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Совет дня</h3>
                    <p className="text-muted-foreground">
                      Не забудь подготовиться к контрольной по математике в пятницу! Повтори темы
                      "Производные" и "Интегралы".
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'schedule' && <Schedule />}
          {activeTab === 'grades' && <Grades />}
          {activeTab === 'homework' && <Homework />}
          {activeTab === 'users' && <Users />}
          {activeTab === 'profile' && <Profile />}
        </main>
      </div>
    </div>
  );
};

export default Index;