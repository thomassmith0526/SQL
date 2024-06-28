INSERT INTO departments (name)
VALUES ('IT'),
       ('Legal'),
       ('Store Operations'),
       ('Finance');

INSERT INTO roles ( title, salary, department)
VALUES ('Software Engineer', 70000, 1),
       ('Accountant', 75000, 4),
       ('Salesperson', 50000, 3),
       ('Lawyer', 80000, 2),
       ('Account Manager', 90000, 4),
       ('Lead Engineer', 100000, 1),
       ('Authenticator', 55500, 2),
       ('Sales Manager', 75000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Myles', 'Smith', 6, 1),
       ('Bruno', 'Mars', 4, NULL),
       ('Brooks', 'Dunn', 5, 4),
       ('Zach', 'Bryan', 2, NULL),
       ('Adele', 'Dasha', 8, 3),
       ('Randy', 'Rogers', 3, NULL),
       ('Nancy', 'Drew', 1, NULL),
       ('Morgan', 'Wallen', 7, NULL);
       