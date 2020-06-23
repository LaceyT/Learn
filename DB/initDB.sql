Create Table Person(
    userId int PRIMARY KEY identity(1,1) not null,
    username VARCHAR(50),
    age INT,
    sex BOOLEAN /* true is male while false is female */
)