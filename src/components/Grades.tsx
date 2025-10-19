import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Grades = () => {
  const subjects = [
    {
      name: 'Математика',
      grades: [5, 5, 4, 5, 5, 4, 5],
      average: 4.7,
      progress: 94,
      icon: 'Calculator',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Русский язык',
      grades: [4, 5, 4, 4, 5, 4],
      average: 4.3,
      progress: 86,
      icon: 'BookText',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Физика',
      grades: [5, 5, 5, 4, 5],
      average: 4.8,
      progress: 96,
      icon: 'Atom',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'История',
      grades: [5, 5, 5, 5, 4],
      average: 4.8,
      progress: 96,
      icon: 'Landmark',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Английский',
      grades: [4, 4, 5, 4, 5, 4],
      average: 4.3,
      progress: 86,
      icon: 'Globe',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'Химия',
      grades: [5, 4, 5, 5, 5],
      average: 4.8,
      progress: 96,
      icon: 'FlaskConical',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const recentGrades = [
    { subject: 'Математика', grade: 5, date: '19.10.2025', topic: 'Интегралы', teacher: 'Иванова М.П.' },
    { subject: 'Русский язык', grade: 4, date: '18.10.2025', topic: 'Сочинение', teacher: 'Петрова А.С.' },
    { subject: 'Физика', grade: 5, date: '18.10.2025', topic: 'Электромагнетизм', teacher: 'Сидоров К.В.' },
    { subject: 'История', grade: 5, date: '17.10.2025', topic: 'Великая Отечественная война', teacher: 'Смирнова Е.Н.' },
    { subject: 'Химия', grade: 5, date: '17.10.2025', topic: 'Органические соединения', teacher: 'Новиков П.Р.' },
  ];

  const overallAverage = (subjects.reduce((sum, s) => sum + s.average, 0) / subjects.length).toFixed(1);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Мои оценки</h2>
          <p className="text-muted-foreground mt-1">Успеваемость за текущий период</p>
        </div>
        <Card className="px-6 py-4 bg-gradient-to-r from-primary to-secondary">
          <div className="text-center">
            <p className="text-sm text-white/80 mb-1">Средний балл</p>
            <p className="text-4xl font-bold text-white">{overallAverage}</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <Card
            key={index}
            className="p-6 bg-card/50 backdrop-blur border-border/50 hover:scale-105 transition-all duration-200 animate-scale-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold mb-1">{subject.name}</h3>
                <p className="text-3xl font-bold text-primary">{subject.average}</p>
              </div>
              <div className={`p-3 rounded-xl bg-gradient-to-br ${subject.color}`}>
                <Icon name={subject.icon as any} size={24} className="text-white" />
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Успеваемость</span>
                  <span className="font-semibold">{subject.progress}%</span>
                </div>
                <Progress value={subject.progress} className="h-2" />
              </div>

              <div className="flex gap-1">
                {subject.grades.map((grade, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-8 rounded flex items-center justify-center text-sm font-bold ${
                      grade === 5
                        ? 'bg-green-500/20 text-green-500'
                        : grade === 4
                        ? 'bg-blue-500/20 text-blue-500'
                        : 'bg-orange-500/20 text-orange-500'
                    }`}
                  >
                    {grade}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
        <h3 className="text-xl font-bold mb-6">Последние оценки</h3>
        <div className="space-y-3">
          {recentGrades.map((grade, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                    grade.grade === 5
                      ? 'bg-green-500/20 text-green-500'
                      : 'bg-blue-500/20 text-blue-500'
                  }`}
                >
                  {grade.grade}
                </div>
                <div>
                  <h4 className="font-semibold">{grade.subject}</h4>
                  <p className="text-sm text-muted-foreground">{grade.topic}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{grade.teacher}</p>
                <p className="text-xs text-muted-foreground">{grade.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
              <Icon name="TrendingUp" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Отличная работа!</h3>
              <p className="text-muted-foreground">
                Твой средний балл вырос на 0.3 за последний месяц. Так держать!
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
              <Icon name="Target" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Цель на месяц</h3>
              <p className="text-muted-foreground">
                Повысить средний балл до 4.8. Осталось совсем немного!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Grades;
