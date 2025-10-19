-- Создание таблицы пользователей
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'teacher', 'student', 'parent')),
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
    phone VARCHAR(20),
    birth_date DATE,
    avatar_emoji VARCHAR(10) DEFAULT '👤',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы классов
CREATE TABLE IF NOT EXISTS classes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    year INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы предметов
CREATE TABLE IF NOT EXISTS subjects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    icon VARCHAR(50) DEFAULT 'BookOpen',
    color VARCHAR(100) DEFAULT 'from-blue-500 to-cyan-500',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Связь учеников с классами
CREATE TABLE IF NOT EXISTS student_classes (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES users(id),
    class_id INTEGER REFERENCES classes(id),
    UNIQUE(student_id, class_id)
);

-- Связь учителей с предметами
CREATE TABLE IF NOT EXISTS teacher_subjects (
    id SERIAL PRIMARY KEY,
    teacher_id INTEGER REFERENCES users(id),
    subject_id INTEGER REFERENCES subjects(id),
    UNIQUE(teacher_id, subject_id)
);

-- Таблица оценок
CREATE TABLE IF NOT EXISTS grades (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES users(id),
    subject_id INTEGER REFERENCES subjects(id),
    teacher_id INTEGER REFERENCES users(id),
    grade INTEGER CHECK (grade >= 1 AND grade <= 5),
    topic VARCHAR(255),
    grade_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица расписания
CREATE TABLE IF NOT EXISTS schedule (
    id SERIAL PRIMARY KEY,
    class_id INTEGER REFERENCES classes(id),
    subject_id INTEGER REFERENCES subjects(id),
    teacher_id INTEGER REFERENCES users(id),
    day_of_week INTEGER CHECK (day_of_week >= 0 AND day_of_week <= 6),
    time_start TIME NOT NULL,
    time_end TIME NOT NULL,
    room VARCHAR(50)
);

-- Таблица домашних заданий
CREATE TABLE IF NOT EXISTS homework (
    id SERIAL PRIMARY KEY,
    subject_id INTEGER REFERENCES subjects(id),
    teacher_id INTEGER REFERENCES users(id),
    class_id INTEGER REFERENCES classes(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    deadline DATE NOT NULL,
    priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица выполнения домашних заданий
CREATE TABLE IF NOT EXISTS homework_completion (
    id SERIAL PRIMARY KEY,
    homework_id INTEGER REFERENCES homework(id),
    student_id INTEGER REFERENCES users(id),
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP,
    UNIQUE(homework_id, student_id)
);

-- Вставка тестовых данных
-- Администратор (пароль: admin123)
INSERT INTO users (email, password_hash, first_name, last_name, role, avatar_emoji) 
VALUES ('admin@school.com', 'admin123', 'Александр', 'Петров', 'admin', '👨‍💼');

-- Учителя (пароль: teacher123)
INSERT INTO users (email, password_hash, first_name, last_name, role, avatar_emoji) 
VALUES 
('ivanova@school.com', 'teacher123', 'Мария', 'Иванова', 'teacher', '👩‍🏫'),
('sidorov@school.com', 'teacher123', 'Константин', 'Сидоров', 'teacher', '👨‍🏫');

-- Ученики (пароль: student123)
INSERT INTO users (email, password_hash, first_name, last_name, role, birth_date, avatar_emoji) 
VALUES 
('student1@school.com', 'student123', 'Дмитрий', 'Смирнов', 'student', '2007-03-15', '👨‍🎓'),
('student2@school.com', 'student123', 'Анна', 'Козлова', 'student', '2007-08-22', '👩‍🎓');

-- Классы
INSERT INTO classes (name, year) VALUES ('11-А', 2025), ('11-Б', 2025);

-- Предметы
INSERT INTO subjects (name, icon, color) VALUES 
('Математика', 'Calculator', 'from-purple-500 to-pink-500'),
('Русский язык', 'BookText', 'from-blue-500 to-cyan-500'),
('Физика', 'Atom', 'from-green-500 to-emerald-500'),
('История', 'Landmark', 'from-orange-500 to-red-500'),
('Английский', 'Globe', 'from-yellow-500 to-orange-500'),
('Химия', 'FlaskConical', 'from-indigo-500 to-purple-500');