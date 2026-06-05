CREATE TABLE Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);

CREATE TABLE Activities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

CREATE TABLE Questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  activity_id INTEGER NOT NULL,
  question_text TEXT NOT NULL,
  FOREIGN KEY(activity_id) REFERENCES Activities(id)
);

CREATE TABLE Answers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question_id INTEGER NOT NULL,
  answer_text TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  FOREIGN KEY(question_id) REFERENCES Questions(id)
);

CREATE TABLE SurveyResponses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  activity_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  chosen_answer TEXT NOT NULL,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(user_id) REFERENCES Users(id),
  FOREIGN KEY(activity_id) REFERENCES Activities(id),
  FOREIGN KEY(question_id) REFERENCES Questions(id)
);
