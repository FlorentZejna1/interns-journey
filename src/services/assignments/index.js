export const assignments = [
    {
      id: 1,
      category: "React Js",
      date: "08.10.2023",
      author: "Florent Zejna",
      jobPosition: "Software Engineer",
      title: "Create a React component",
      description: "Create a simple React component that displays a message on the screen. The message should be 'Hello World!'",
      details: [
        "Create a new file for your component, for example, 'HelloWorld.js'.",
        "Import React into your component file.",
        "Create a functional component that returns a div containing the message 'Hello World!'",
        "Export the component.",
        "Import the component into your main solution component and render it on the screen."
      ],
      difficulty: "Easy",
      averageTime: '2~4',
      finished: false,
    },
    {
        id: 2,
        category: "React Js",
        date: "08.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Create a React component that displays a button",
        description: "Create a React component that displays a button. When the button is clicked, the text on the button should change to 'Clicked'",
        details:[
          "Create a new file for your component, for example, 'Button.js'",
          "Import React into your component file.",
          "Create a functional component that returns a button.",
          "Add an onClick event handler to the button that updates the component's state when the button is clicked.",
          "Use the component's state to dynamically render the text on the button.",
          "Export the component",
          "Import the component into your main solution component and render it on the screen."
        ],
        difficulty: "Easy",
        averageTime: '2~4',
        finished: false,
      },
      {
        id: 3,
        category: "React Js",
        date: "08.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Create a React component that displays a list of numbers from 1 to 10",
        description: "Create a React component that displays a list of numbers from 1 to 10. The numbers should be displayed in a list format.",
        details: [
          "Create a new file for your component, for example, 'NumberList.js'",
          "Import React into your component file",
          "Create a functional component that returns a list",
          "Use a loop to dynamically create list items for each number from 1 to 10",
          "Export the component.",
          "Import the component into your main solution component and render it on the screen.",
        ],
        difficulty: "Easy",
        averageTime: '2~4',
        finished: false
      },
      {
        id: 4,
        category: "React Js",
        date: "08.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Create a React component that displays a form",
        description: "Create a React component that displays a form. The form should contain two text inputs for the user's first and last name, and a submit button. When the submit button is clicked, the form should display the full name of the user.",
        details: [
          "Create a new file for your component, for example, 'NameForm.js'",
          "Import React into your component file",
          "Create a class component with a constructor that sets the initial state for the first and last name",
          "Create a form with two text inputs and a submit button",
          "Use the onChange event handler to update the component's state as the user enters their first and last name",
          "Use the onSubmit event handler to display the full name of the user when the form is submitted.",
          "Export the component.",
          "Import the component into your main solution component and render it on the screen.",
        ],
        difficulty: "Easy",
        averageTime: '2~4',
        finished: false
      },
      {
        id: 5,
        category: "React Js",
        date: "08.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Create a React component that displays an image",
        description: "Create a React component that displays an image. The image should be sourced from a URL.",
        details: [
          "Create a new file for your component, for example, 'Image.js'",
          "Import React into your component file",
          "Create a functional component that returns an image element",
          "Set the source of the image to a URL",
          "Export the component.",
          "Import the component into your main solution component and render it on the screen.",
        ],
        difficulty: "Easy",
        averageTime: '2~4',
        finished: false
      },
      {
        id: 6,
        category: "React Js",
        date: "08.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Create a React component that displays the current time",
        description: "Create a React component that displays the current time. The time should update every second.",
        details: [
          "Import the React library and use the useState and useEffect hooks",
          "Create a state variable to store the current time and set its initial value to the current date and time using new Date().",
          "Create an useEffect hook that updates the state every second using setInterval.",
          "Import the component into your main solution component and render it on the screen.",
          "Test the component to ensure that it is updating the time every second.",
        ],
        difficulty: "Medium",
        averageTime: '4~6',
        finished: false
      },
      {
        id: 7,
        category: "React Js",
        date: "08.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Create a simple todo list app",
        description: "Create a simple todo list app. Users should be able to add items to the list, mark items as completed, and delete items from the list.",
        details: [
          "In this assignment, you will create a simple to-do list application. The application should allow users to add new tasks to the list, mark tasks as completed, and delete tasks from the list. You will use React to create the application and use state to manage the list of tasks. You will also need to create components to display the tasks and handle user interactions."
        ],
        difficulty: "Hard",
        averageTime: '6~8',
      },
      {
        id: 8,
        category: "React Js",
        date: "08.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Create a countdown timer",
        description: "Create a countdown timer that starts at a given number of seconds and counts down to 0. When the timer reaches 0, display a message.",
        details: [
         "In this assignment, you will create a countdown timer using React. The timer should start at a given number of seconds and count down to 0. You will use state to manage the number of seconds and update the timer display. When the timer reaches 0, you will display a message to the user."
        ],
        difficulty: "Hard",
        averageTime: '6~8',
      },
      {
        id: 9,
        category: "React Js",
        date: "08.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Create a simple weather app",
        description: "Create a simple weather app that displays the current temperature and weather conditions for a given location. You can use an API such as OpenWeatherMap to get the weather data.",
        details: [
          "In this assignment, you will create a simple weather application using React. The application should display the current temperature and weather conditions for a given location. You will use an API, such as OpenWeatherMap, to retrieve the weather data. You will create components to display the weather information and handle user interactions, such as entering a location."
        ],
        difficulty: "Hard",
        averageTime: '6~8',
      },
      {
        id: 10,
        category: "React Js",
        date: "08.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Create a basic quiz app",
        description: "Create a basic quiz app. Users should be able to select an answer for each question and see their score at the end of the quiz.",
        details: [
          "In this assignment, you will create a basic quiz application using React. The application should allow users to select an answer for each question and provide feedback on whether the answer was correct or incorrect. At the end of the quiz, the user's score should be displayed. You will use state to manage the questions and user responses and create components to display the quiz questions and handle user interactions."
        ],
        difficulty: "Hard",
        averageTime: '6~8',
      },
      {
        id: 11,
        category: "React Js",
        date: "08.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Create a basic calculator",
        description: "Create a basic calculator app that allows the user to add, subtract, multiply, and divide two numbers.",
        details: [
          "The calculator app should have input fields for the two numbers and buttons for each of the four basic operations.",
          "When the user inputs the two numbers and clicks one of the operation buttons, the app should perform the corresponding operation and display the result.",
          "The app should handle basic error cases, such as dividing by zero or entering non-numeric values."
        ],
        difficulty: "Hard",
        averageTime: '6~8',
      },
      {
        id: 12,
        category: "React Js",
        date: "08.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Create a simple counter app",
        description: "Create a simple counter app that allows the user to increment or decrement a number displayed on the screen.",
        details: [
          "The counter app should have a button to increment the number and a button to decrement the number.",
          "The app should display the current value of the number on the screen, and update the value when the user clicks the increment or decrement button."
        ],
        difficulty: "Hard",
        averageTime: '6~8',
      },
      {
        id: 13,
        category: "React Js",
        date: "08.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Create a stopwatch app",
        description: "Create a stopwatch app that displays the elapsed time in minutes, seconds, and milliseconds. The user should be able to start, pause, and reset the timer.",
        details: [
          "The stopwatch app should have buttons to start, pause, and reset the timer.",
          "The app should display the elapsed time in minutes, seconds, and milliseconds, and update the display every millisecond.",
          "When the user clicks the start button, the timer should start counting up from 0. When the user clicks the pause button, the timer should stop counting. When the user clicks the reset button, the timer should reset to 0."
        ],
        difficulty: "Hard",
        averageTime: '6~8',
      },
      {
        id: 14,
        category: "React Js",
        date: "08.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Create a component that displays a random quote",
        description: "Create a component that displays a random quote from a list of quotes. Allow the user to click a button to display a new quote.",
        details: [
          "The quote component should have a button to display a new quote.",
          "The app should have a list of quotes to choose from, and each time the user clicks the button, a random quote should be displayed on the screen."
        ],
        difficulty: "Hard",
        averageTime: '6~8',
      },
      {
        id: 15,
        category: "React Js",
        date: "30.10.2023",
        author: "Florent Zejna",
        jobPosition: "Software Engineer",
        title: "Build a Movie Search App",
        description: "Create an application using React that allows users to search for movies and view details about them.",
        details: [
          "Build a React application with a component structure that includes at least three components: One about the App, SearchBar, and MovieList.",
          "The App component should be the main container for the movie search app",
          "The SearchBar component should include an input field for users to enter movie titles and a button to initiate the search.",
          "The MovieList component should display a list of movie search results, including movie titles, release years, and a poster image.",
          "Use a free movie database API (e.g., OMDB API) to fetch movie data based on the user's search query",
          "Display the retrieved movie data in a visually appealing way, including movie posters",
          "Allow users to click on a movie to view more details about it, such as the plot, actors, and ratings.",
        ],
        difficulty: "Hard",
        averageTime: '6~8',
      },
      // {
      //   id: 16,
      //   category: "React Js",
      //   date: "08.10.2023",
      //   author: "Florent Zejna",
      //   jobPosition: "Software Engineer",
      //   title: "NewsFeed App",
      //   description: "This assignment requires implementing the following features:",
      //   details: [
      //     "Implement news articles shown in the design folder, colors of background and text can be different.",
      //     "Integrate the news article with the provided template.",
      //     "Integrate the following news feed API with the implemented design",
      //     "Make sure that the finished assignment is visually consistent with the screenshots in the design folder (except for colors)",
      //     "Do not use any third party libraries or packages",
      //     "### Bing News Search API",
      //     "You can find the url here : https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1",
      //     "Authentication is done via RapidAPI. You will receive an API key that you'd have to pass into a HEADER.",
      //     "Create a RapidAPI account. Go to rapidapi.com.",
      //     "Go to the Pricing page of the Bing News Search API. Choose a Basic Plan. Just click on Select Plan button.",
      //     "Go to Endpoint tab. Test any endpoint. You can choose Code Snippet for almost any programming language or terminal.",
      //     "Your unique API key will be already pasted.",
      //     "### Bonus tasks",
      //     "Add a click event to the link element inside .news-title div, which changes the innerText from Incodeks to Loading... after a click",
      //     "Add a search feature",
      //     "Add a language selection feature"
      //   ],
      //   difficulty: "Expert",
      //   averageTime: '8~12',
      // },

  ];