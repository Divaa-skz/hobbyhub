-- Insert Activities
INSERT INTO Activities (name) VALUES
('Listening to Music'),
('DIY Craft'),
('Cooking'),
('Colouring'),
('Reading'),
('Drawing'),
('Workout');

-- Drawing Quiz
INSERT INTO Questions (activity_id, question_text) VALUES
(6, 'What is used to draw lines?'),
(6, 'Which tool is used for coloring?'),
(6, 'What helps make straight lines?');

INSERT INTO Answers (question_id, answer_text, is_correct) VALUES
(1, 'Pencil', 1), (1, 'Paint', 0),
(2, 'Ruler', 0), (2, 'Color Pencil', 1),
(3, 'Ruler', 1), (3, 'Eraser', 0);

-- Workout Quiz
INSERT INTO Questions (activity_id, question_text) VALUES
(7, 'Exercise helps improve?'),
(7, 'Which activity burns energy?'),
(7, 'What is important during workouts?');

INSERT INTO Answers (question_id, answer_text, is_correct) VALUES
(4, 'Fitness', 1), (4, 'Tiredness', 0),
(5, 'Eating', 0), (5, 'Running', 1),
(6, 'Water', 1), (6, 'Mobile phone', 0);

-- Reading Quiz
INSERT INTO Questions (activity_id, question_text) VALUES
(5, 'What do we read?'),
(5, 'Reading helps improve?'),
(5, 'Which place is usually quiet for reading?');

INSERT INTO Answers (question_id, answer_text, is_correct) VALUES
(7, 'Books', 1), (7, 'Pictures', 0),
(8, 'Voice', 0), (8, 'Knowledge', 1),
(9, 'Library', 1), (9, 'Meeting room', 0);

-- Colouring Quiz
INSERT INTO Questions (activity_id, question_text) VALUES
(4, 'Which tool is used for coloring?'),
(4, 'What helps make artwork colorful?'),
(4, 'Which activity improves creativity?');

INSERT INTO Answers (question_id, answer_text, is_correct) VALUES
(10, 'Color Pencil', 1), (10, 'Brush', 0),
(11, 'Color pencil', 1), (11, 'Crayons', 1),
(12, 'Coloring', 1), (12, 'Designing', 0);

-- Cooking Quiz
INSERT INTO Questions (activity_id, question_text) VALUES
(3, 'Which place is used for cooking?'),
(3, 'What tool is used to fry food?'),
(3, 'Which activity helps make meals?');

INSERT INTO Answers (question_id, answer_text, is_correct) VALUES
(13, 'Kitchen', 1), (13, 'House', 0),
(14, 'Spatula', 1), (14, 'Pan', 1),
(15, 'Cooking', 1), (15, 'Eating', 0);

-- DIY Crafts Quiz
INSERT INTO Questions (activity_id, question_text) VALUES
(2, 'What is used to cut paper?'),
(2, 'Which item helps stick materials?'),
(2, 'DIY crafts improve what skill?');

INSERT INTO Answers (question_id, answer_text, is_correct) VALUES
(16, 'Scissors', 1), (16, 'Knife', 0),
(17, 'Tape', 0), (17, 'Glue', 1),
(18, 'Creativity', 1), (18, 'Save money', 0);

-- Music Quiz
INSERT INTO Questions (activity_id, question_text) VALUES
(1, 'Which instrument has piano keys?'),
(1, 'Music can help improve?'),
(1, 'Which activity involves rhythm?');

INSERT INTO Answers (question_id, answer_text, is_correct) VALUES
(19, 'Piano', 1), (19, 'Guitar', 0),
(20, 'Driving speed', 0), (20, 'Relaxation', 1),
(21, 'Music', 1), (21, 'Typing on a keyboard', 0);
