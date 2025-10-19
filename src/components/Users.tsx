import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Александр Петров',
      email: 'alex.petrov@example.com',
      role: 'admin',
      status: 'active',
      lastActive: '19.10.2025',
      avatar: '👨‍💼',
    },
    {
      id: 2,
      name: 'Мария Иванова',
      email: 'maria.ivanova@example.com',
      role: 'teacher',
      status: 'active',
      lastActive: '19.10.2025',
      avatar: '👩‍🏫',
    },
    {
      id: 3,
      name: 'Дмитрий Сидоров',
      email: 'dmitry.sidorov@example.com',
      role: 'student',
      status: 'active',
      lastActive: '18.10.2025',
      avatar: '👨‍🎓',
    },
    {
      id: 4,
      name: 'Елена Смирнова',
      email: 'elena.smirnova@example.com',
      role: 'teacher',
      status: 'active',
      lastActive: '19.10.2025',
      avatar: '👩‍🏫',
    },
    {
      id: 5,
      name: 'Иван Козлов',
      email: 'ivan.kozlov@example.com',
      role: 'student',
      status: 'inactive',
      lastActive: '15.10.2025',
      avatar: '👨‍🎓',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-500">Администратор</span>;
      case 'teacher':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-500">Учитель</span>;
      default:
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-500">Ученик</span>;
    }
  };

  const getStatusBadge = (status: string) => {
    return status === 'active' ? (
      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-500">Активен</span>
    ) : (
      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-500/20 text-gray-500">Неактивен</span>
    );
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = {
    total: users.length,
    admins: users.filter(u => u.role === 'admin').length,
    teachers: users.filter(u => u.role === 'teacher').length,
    students: users.filter(u => u.role === 'student').length,
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Управление пользователями</h2>
          <p className="text-muted-foreground mt-1">Добавляй и управляй доступом к дневнику</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="UserPlus" size={18} className="mr-2" />
              Добавить пользователя
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle>Добавить нового пользователя</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя и фамилия</Label>
                <Input id="name" placeholder="Введите имя и фамилию" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@mail.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Роль</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите роль" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Ученик</SelectItem>
                    <SelectItem value="teacher">Учитель</SelectItem>
                    <SelectItem value="admin">Администратор</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                Добавить пользователя
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-card to-card/50 backdrop-blur border-border/50">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Всего</p>
            <Icon name="Users" size={20} className="text-primary" />
          </div>
          <p className="text-3xl font-bold">{stats.total}</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Админы</p>
            <Icon name="Shield" size={20} className="text-purple-500" />
          </div>
          <p className="text-3xl font-bold text-purple-500">{stats.admins}</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Учителя</p>
            <Icon name="GraduationCap" size={20} className="text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-blue-500">{stats.teachers}</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Ученики</p>
            <Icon name="BookOpen" size={20} className="text-green-500" />
          </div>
          <p className="text-3xl font-bold text-green-500">{stats.students}</p>
        </Card>
      </div>

      <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
        <div className="mb-6">
          <div className="relative">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск по имени или email..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredUsers.map((user, index) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-200 animate-slide-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                  {user.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{user.name}</h4>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {getRoleBadge(user.role)}
                {getStatusBadge(user.status)}
                <div className="text-right text-sm text-muted-foreground min-w-[100px]">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>{user.lastActive}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Icon name="Pencil" size={18} />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full text-red-500 hover:text-red-600">
                    <Icon name="Trash2" size={18} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
            <Icon name="Shield" size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Безопасность</h3>
            <p className="text-muted-foreground">
              Только администраторы могут добавлять новых пользователей и управлять их правами доступа.
              Все действия записываются в журнал безопасности.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Users;
