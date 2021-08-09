# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer:
    MVC stands for model view controller and is the framework for how rails is structured.
  Researched answer:
    Model View Controller is an architectural pattern that separates business logic (backend data)
    from the input and presentation logic associated with a GUI. When a controller gets a request it
    invokes and interacts with the model, then renders the final complete web page to the user's browser

2. What is a relational database? Are there other kinds of databases?

  Your answer:
    A relational database is where data is related to each other and organized by rows and columns. Each piece of data in the row is related to what the row represents.
  Researched answer:
    A relational database is is a type of database that stores and provides access to data points that are related to one another. The columns of the table hold attributes of the data, and each record usually has a value for each attribute, making it easy to establish the relationships among data points.

3. What is object-relational mapping?

  Your answer:
  Object relational mapping is a way for incompatible systems to access data which are packaged into
  objects. And example is SQL databases.
  Researched answer:
  (ORM) is a technique that lets you query and manipulate data from a database using object-oriented
  data. It can be written in your language of choice that encapsulates the code. In short ORM is a layer between the language you are using and the database.


4. What is a gem?

  Your answer:
    Ruby has a package manager which manages 'gems' which are self-contained ruby packages. For example you can install a ruby gem for testing.
  Researched answer:
    The RubyGems library allows you to browse a vast library of code snippets or packages called gems. These gems have a wide range of functionalities such as connecting you to Amazon S3 or helping you set up a server.


5. What are primary keys? Why are they important?

  Your answer:
    Primary keys are unique numbers added to each row in a relational database which identifies the entry and distinguishes it from the rest. Rails handles setting the primary key.
  Researched answer:
    Each row in the database represents an instance of a class and needs to be identified by a unique key. Rails handles this by assigning each row in the database a unique number called the primary key. It is strict with the usage even so if you delete a row the primary key will be not reused.


## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes:
Representational State Transfer is a pattern to follow when structuring routes between the server
and the client. RESTful routes are an attempt to bring the operations that can be applied to an object into HTTP requests.
2. JSON:
  Javascript object notation is an open standard that uses human readable text to store and transmit data objects consisting of attribute–value pairs and arrays.
3. ERB:
 ERB or embedded Ruby is an easy to use templating language for ruby which combines plain text with Ruby code.
4. Params:
  Params are parameters that allow us to add dynamic information to our program by passing a value into the controller.
5. API:
  An API or application programming interface is software which offers a service to other pieces of software. It allows two applications to communicate with one another to access data.
