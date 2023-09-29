import type { Meta, StoryObj } from "@storybook/react";
import { ArticleList } from "./ArticleList";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import { routerDecorator } from "shared/config/storybook/routerDecorator";
import { type Article } from "entities/Article/model/types/article";
import { ArticleType } from "entities/Article/model/consts/consts";
import { ArticleView } from "entities/Article";

const meta = {
  title: "entities/Article/ArticleList",
  component: ArticleList,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

const articles = [
  {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    userId: "1",
    types: [
      ArticleType.IT
    ],
    user: {
      id: "1",
      username: "MockUser",
      avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm"
    },
    blocks: [
      {
        id: "1",
        type: "text",
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
        ]
      },
      {
        id: "4",
        type: "code",
        code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
      },
      {
        id: "5",
        type: "text",
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
        ]
      },
      {
        id: "2",
        type: "image",
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Рисунок 1 - скриншот сайта"
      },
      {
        id: "3",
        type: "code",
        code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
      },
      {
        id: "7",
        type: "text",
        title: "Заголовок этого блока",
        paragraphs: [
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
        ]
      },
      {
        id: "8",
        type: "image",
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Рисунок 1 - скриншот сайта"
      },
      {
        id: "9",
        type: "text",
        title: "Заголовок этого блока",
        paragraphs: [
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
        ]
      }
    ]
  } as Article
];

export const LightSmall: Story = {
  args: {
    isLoading: false,
    articles
  },
  decorators: [themeDecorator(Themes.LIGHT), routerDecorator]
};

export const DarkSmall: Story = {
  args: {
    isLoading: false,
    articles
  },
  decorators: [themeDecorator(Themes.DARK), routerDecorator]
};

export const OrangeSmall: Story = {
  args: {
    isLoading: false,
    articles
  },
  decorators: [themeDecorator(Themes.ORANGE), routerDecorator]
};

export const IsLoadingSmall: Story = {
  args: {
    isLoading: true,
    articles: []
  },
  decorators: [themeDecorator(Themes.ORANGE), routerDecorator]
};

export const LightBig: Story = {
  args: {
    isLoading: false,
    articles,
    view: ArticleView.BIG
  },
  decorators: [themeDecorator(Themes.LIGHT), routerDecorator]
};

export const DarkBig: Story = {
  args: {
    isLoading: false,
    articles,
    view: ArticleView.BIG
  },
  decorators: [themeDecorator(Themes.DARK), routerDecorator]
};

export const LightOrange: Story = {
  args: {
    isLoading: false,
    articles,
    view: ArticleView.BIG
  },
  decorators: [themeDecorator(Themes.ORANGE), routerDecorator]
};

export const IsLoadingBig: Story = {
  args: {
    isLoading: true,
    articles: [],
    view: ArticleView.BIG
  },
  decorators: [themeDecorator(Themes.ORANGE), routerDecorator]
};
