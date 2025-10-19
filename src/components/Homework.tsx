import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const Homework = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      subject: 'Математика',
      title: 'Решить задачи №15-20',
      description: 'Учебник стр. 45, задачи на интегралы',
      deadline: '20.10.2025',
      priority: 'high',
      completed: false,
      icon: 'Calculator',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      subject: 'Русский язык',
      title: 'Написать сочинение',
      description: 'Тема: "Роль литературы в современном мире" (300-400 слов)',
      deadline: '21.10.2025',
      priority: 'high',
      completed: false,
      icon: 'BookText',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      subject: 'Физика',
      title: 'Лабораторная работа',
      description: 'Изучение электромагнитных волн, оформить отчет',
      deadline: '22.10.2025',
      priority: 'medium',
      completed: true,
      icon: 'Atom',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      subject: 'История',
      title: 'Подготовить доклад',
      description: 'Тема: "Великая Отечественная война 1941-1945"',
      deadline: '23.10.2025',
      priority: 'medium',
      completed: false,
      icon: 'Landmark',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      subject: 'Английский',
      title: 'Выучить слова',
      description: 'Unit 5, стр. 78-80, 50 новых слов',
      deadline: '20.10.2025',
      priority: 'low',
      completed: true,
      icon: 'Globe',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 6,
      subject: 'Химия',
      title: 'Решить уравнения',
      description: 'Реакции органических соединений, задачи 1-10',
      deadline: '24.10.2025',
      priority: 'low',
      completed: false,
      icon: 'FlaskConical',
      color: 'from-indigo-500 to-purple-500',
    },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const activeTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);
  const completionRate = Math.round((completedTasks.length / tasks.length) * 100);

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-500/20 text-red-500">Срочно</span>;
      case 'medium':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-500">Важно</span>;
      default:
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-500">Обычное</span>;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Домашние задания</h2>
          <p className="text-muted-foreground mt-1">Твои задачи на неделю</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
          <Icon name="Plus" size={18} className="mr-2" />
          Добавить задание
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-card to-card/50 backdrop-blur border-border/50">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Всего заданий</p>
            <Icon name="ListTodo" size={20} className="text-primary" />
          </div>
          <p className="text-3xl font-bold">{tasks.length}</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-card to-card/50 backdrop-blur border-border/50">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Выполнено</p>
            <Icon name="CheckCircle2" size={20} className="text-green-500" />
          </div>
          <p className="text-3xl font-bold text-green-500">{completedTasks.length}</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-card to-card/50 backdrop-blur border-border/50">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Прогресс</p>
            <Icon name="TrendingUp" size={20} className="text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-blue-500">{completionRate}%</p>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Активные задания ({activeTasks.length})</h3>
        {activeTasks.map((task, index) => (
          <Card
            key={task.id}
            className="p-5 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-200 animate-slide-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start gap-4">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
                className="mt-1"
              />

              <div className={`p-3 rounded-xl bg-gradient-to-br ${task.color} flex-shrink-0`}>
                <Icon name={task.icon as any} size={24} className="text-white" />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold">{task.title}</h4>
                      {getPriorityBadge(task.priority)}
                    </div>
                    <p className="text-sm text-muted-foreground">{task.subject}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    <span>{task.deadline}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{task.description}</p>
              </div>

              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="MoreVertical" size={18} />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {completedTasks.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-muted-foreground">Выполненные ({completedTasks.length})</h3>
          {completedTasks.map((task) => (
            <Card
              key={task.id}
              className="p-5 bg-card/30 backdrop-blur border-border/30 opacity-60"
            >
              <div className="flex items-start gap-4">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                  className="mt-1"
                />

                <div className={`p-3 rounded-xl bg-gradient-to-br ${task.color} flex-shrink-0`}>
                  <Icon name={task.icon as any} size={24} className="text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-bold line-through">{task.title}</h4>
                      <p className="text-sm text-muted-foreground">{task.subject}</p>
                    </div>
                    <Icon name="CheckCircle2" size={24} className="text-green-500" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
            <Icon name="Sparkles" size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Отличная работа!</h3>
            <p className="text-muted-foreground">
              Ты выполнил {completedTasks.length} из {tasks.length} заданий. Продолжай в том же духе!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Homework;
