# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
  Sequel is a domain specific language that allows you to work with relational databases. It can be used to perform queries and even update/create entries in your database.

2. What the PostgreSQL query that would return all the content in a particular table?
  SELECT *
  FROM table;

3. What is the command to create a new Rails application with a PostgreSQL database?
  > rails new APP -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
> rails generate model Meals breakfast:string lunch:string, dinner:string

5. What is a migration? Why would you use one?
> Migration is when you adopt changes into your database via a migration file. Changes can include adding columns, removing columns or renaming.

6. What is the command to generate a migration file?
> rails generate migration AddColumnToList

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
  -A rails model is in PascalCase and the table generated is in snake_case.


8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
  The schema is the set up of your tables in the application. It includes your key value pairs and their data type class. Rails modifies this file and you should not change it directly.

9. What is the Rails console?
  -The rails console is accessed through ```>rails c``` and allows us to interact directly with Active Record using console commands.

10. What is the Rails console command to see all the content in a particular table?
  -TableName.all
