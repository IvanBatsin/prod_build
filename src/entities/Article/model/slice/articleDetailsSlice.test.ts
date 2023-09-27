import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { ArticleBlockType, type Article, ArticleType } from "../types/article";
import type { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { articleReducer } from "./articleDetailsSlice";

describe("article details slice", () => {
  test("fetchArticleById service pending", () => {
    const state: ArticleDetailsSchema = {
      isLoading: false
    };

    expect(articleReducer(state, fetchArticleById.pending)).toEqual({
      isLoading: true,
      error: undefined
    });
  });

  test("fetchArticleById service fulfilled", () => {
    const data: Article = {
      id: "1",
      title: "Javascript news",
      subtitle: "Что нового в JS за 2022 год?",
      img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
      views: 1022,
      createdAt: "26.02.2022",
      types: [ArticleType.IT],
      user: {
        id: "1",
        username: "MockUser",
        avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm"
      },
      blocks: [
        {
          id: "1",
          type: ArticleBlockType.TEXT,
          title: "Заголовок этого блока",
          paragraphs: [
            "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
            "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
            "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
          ]
        }
      ]
    };

    const state: ArticleDetailsSchema = {
      isLoading: false,
      data
    };

    expect(articleReducer(state, fetchArticleById.fulfilled(data, "1", ""))).toEqual({
      isLoading: false,
      data,
      error: undefined
    });
  });

  test("fetchArticleById service rejected", () => {
    const state: ArticleDetailsSchema = {
      isLoading: true
    };

    expect(articleReducer(state, fetchArticleById.rejected(null, "", "", "test error"))).toEqual({
      isLoading: false,
      error: "test error"
    });
  });
});
