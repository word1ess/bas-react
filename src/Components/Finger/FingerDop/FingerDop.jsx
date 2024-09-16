import "./FingerDop.scss";

import { Link } from "react-router-dom";

import plusImg from "../../../img/svgicons/plus.svg";
import itemImgFirst from "./img/1.webp";
import itemImgSecond from "./img/2.webp";
import playBtnImg from "./img/play-btn.svg";
import linkImg from "../../../img/svgicons/link-dark.svg";

import fsVideo from './video/fs.mp4'
import FingerDopItem from "./FingerDopItem/FingerDopItem";

function FingerDop() {
  function importAll(image) {
    return image.keys().map(image);
  }
  const modalImgFirst = importAll(
    require.context("./img/modalFirst/", false, /\.(png)$/)
  );
  const modalImgSecond = importAll(
    require.context("./img/modalSecond/", false, /\.(png)$/)
  );
  const fingerDopItems = [
    {
      forScrollClass: "customServers",
      title: "CustomServers",
      text: [
        <p>
          Cкрипт для сбора личной базы отпечатков с реальных устройств.
          Фактически сервис позволяет создать свой аналог сервиса
          FingerprintSwitcher каждому пользователю. Такой подход дает несколько
          важных преимуществ:
        </p>,
        <ul>
          <li>База отпечатков, которую используете только вы.</li>
          <li>
            Контроль доступа. При желании, вы можете предоставить доступ к вашей
            базе данных другим пользователям, например, покупателям вашей
            программы.
          </li>
          <li>Большую скорость получения PerfectCanvas.</li>
        </ul>,
      ],
      link: "https://wiki.bablosoft.com/doku.php?id=ru:customservers",
      img: itemImgFirst,
      playBtnImg,
      modal: [
        <>
          <header className="block-header border-1">
            <h2>
              <span>
                <div className="corner top left"></div>
                <div className="corner bottom right"></div>
                <div className="line-border top"></div>
                <div className="line-border right"></div>
                <div className="line-border left"></div>
                <div className="line-border bottom"></div>
                Пользовательские сервера
              </span>
            </h2>
          </header>
          <main className="modal__body">
            <p>
              Пользовательские сервера позволяют создавать множество отдельных
              баз данных с{" "}
              <Link to="https://fingerprints.bablosoft.com/">
                <u>отпечатками</u>
              </Link>{" "}
              для каждого клиента сервиса CustomServer. Фактически новый сервис
              позволяет создать свой аналог сервиса FingerprintSwitcher каждому
              пользователю. Такой подход дает несколько важных преимуществ:
            </p>
            <img src={modalImgFirst[0]} alt="" />
            <ul>
              <li>
                <b>Изоляция.</b> По умолчанию получать отпечатки из базы может
                каждый пользователь и, следовательно, они могут использоваться
                повторно. При использовании CustomServers у вас есть собственная
                база данных. Это означает, что отпечатки можете использовать
                только вы. Ни одно другое лицо, имеющее лицензию
                FingerprintSwitcher, не может их использовать.
              </li>
              <li>
                <b>Контроль доступа.</b> При желании, вы можете предоставить
                доступ к вашей базе данных другим аккаунтам bablosoft, например,
                покупателям вашего скрипта.
              </li>
              <li>
                <b>Скорость PerfectCanvas.</b> По умолчанию, отпечатки с{" "}
                <Link to="https://wiki.bablosoft.com/doku.php?id=perfectcanvas">
                  <b>
                    <u>запросом PerfectCanvas</u>
                  </b>
                </Link>{" "}
                могут быть получены только в режиме реального времени. Этот
                процесс может быть медленным. Смотрите раздел с{" "}
                <Link to="https://wiki.bablosoft.com/doku.php?id=ru:perfectcanvas#%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%B8%D1%8F">
                  <b>
                    <u>ограничениями</u>
                  </b>
                </Link>{" "}
                для более подробной информации. С помощью CustomServers вы
                можете предварительно задать запрос PerfectCanvas в панели
                настроек. Это сделает так, что каждый отпечаток в вашей базе
                данных будет включать данные canvas и, следовательно,
                значительно ускорит процесс.
              </li>
            </ul>
            <header className="block-header border-1">
              <h2>
                <span>
                  <div className="corner top left"></div>
                  <div className="corner bottom right"></div>
                  <div className="line-border top"></div>
                  <div className="line-border right"></div>
                  <div className="line-border left"></div>
                  <div className="line-border bottom"></div>
                  Административная панель
                </span>
              </h2>
            </header>
            <p>
              У проекта есть административная панель, которая позволяет
              взаимодействовать с вашей базой данных. Скриншоты: 
              <Link to="https://wiki.bablosoft.com/lib/exe/fetch.php?cache=&media=ru:screencapture-customfingerprints-bablosoft-admin-settings-2021-12-05-14_58_49.png">
                <b>
                  <u>настройки</u>
                </b>
              </Link>
              ,{" "}
              <Link to="https://wiki.bablosoft.com/lib/exe/fetch.php?cache=&media=ru:screencapture-customfingerprints-bablosoft-admin-statistic-2021-12-05-14_58_57.png">
                <b>
                  <u>статистика</u>
                </b>
              </Link>
              ,{" "}
              <Link to="https://wiki.bablosoft.com/lib/exe/fetch.php?cache=&media=ru:screencapture-customfingerprints-bablosoft-admin-database-2021-12-05-14_59_05.png">
                <b>
                  <u>база данных</u>
                </b>
              </Link>
              . На данном видео можно увидеть пользовательский интерфейс:
            </p>
            <video
              src="https://wiki.bablosoft.com/lib/exe/fetch.php?media=ru:2021-12-05_15-22-38.mp4"
              controls
            ></video>
            <p>
              Более подробно пользовательский интерфейс будет описан далее в
              этой статье.
            </p>
            <header className="block-header border-1">
              <h2>
                <span>
                  <div className="corner top left"></div>
                  <div className="corner bottom right"></div>
                  <div className="line-border top"></div>
                  <div className="line-border right"></div>
                  <div className="line-border left"></div>
                  <div className="line-border bottom"></div>
                  Предварительные требования
                </span>
              </h2>
            </header>
            <p>
              Генерацию отпечатков можно обнаружить, поэтому в наших продуктах
              она не используются. Вместо этого мы используем отпечатки
              полученные из реальных устройств. Поэтому CustomServers могут
              использовать только 
              <b>владельцы веб-сайтов</b>. Отпечатки будут собираться у
              пользователей сайта.
            </p>
            <p>
              Строго запрещено использовать сайты, которые вам не принадлежат, а
              также сайты с вредоносным или незаконным содержанием.
            </p>
            <p>
              Еще одно требование - 
              <b>наличие активной лицензии FingerprintSwitcher</b>.
            </p>
            <header className="block-header border-1">
              <h2>
                <span>
                  <div className="corner top left"></div>
                  <div className="corner bottom right"></div>
                  <div className="line-border top"></div>
                  <div className="line-border right"></div>
                  <div className="line-border left"></div>
                  <div className="line-border bottom"></div>
                  Интеграция с PerfectCanvas
                </span>
              </h2>
            </header>
            <p>
              Наиболее значительным преимуществом использования CustomServers
              является быстрое получение отпечатков с PerfectCanvas. При
              правильной настройке скорость получения отпечатков с запросом
              PerfectCanvas может быть такой же, как скорость получения
              отпечатков без PerfectCanvas.
            </p>
            <p>Как это работает?</p>
            <p>
              Предположим, вы работаете с сайтом X, и данные canvas для сайта X
              всегда одинаковы при каждом его посещении. В этом случае вы можете
              сохранить этот запрос PerfectCanvas в своей{" "}
              <Link to="https://customfingerprints.bablosoft.com/admin/settings#perfect-canvas-request">
                <b>
                  <u>панели администратора</u>
                </b>
              </Link>
              . И теперь все ваши отпечатки будут иметь данные canvas для сайта
              X и, следовательно, могут быть получены мгновенно.
            </p>
            <p>
              Единственное различие по сравнению со стандартным подходом состоит
              в том, что запрос PerfectCanvas может быть известен заранее и
              может быть вычислен заблаговременно:
            </p>
            <img src={modalImgFirst[1]} alt="" />
            <p>
              В случае, если запрос PerfectCanvas изменяется или вы не знаете
              его до посещения сайта, отпечаток будет получаться в реальном
              времени, так, как если бы алгоритм работал без CustomServers. Но
              если используется CustomServers, устройства, из которых получается
              отпечаток, будут изолированы от устройств других пользователей,
              поэтому вам не нужно будет ждать в очереди, и, следовательно,
              отпечатки с данными canvas будут получаться намного быстрее.
            </p>
            <p>
              Вы можете посмотреть, сколько устройств подключены в данный момент
              к вашей базе на{" "}
              <Link to="https://customfingerprints.bablosoft.com/admin/statistic#connected-clients">
                <b>
                  <u> странице статистики</u>
                </b>
              </Link>
            </p>
            <header className="block-header border-1">
              <h2>
                <span>
                  <div className="corner top left"></div>
                  <div className="corner bottom right"></div>
                  <div className="line-border top"></div>
                  <div className="line-border right"></div>
                  <div className="line-border left"></div>
                  <div className="line-border bottom"></div>
                  Как использовать?
                </span>
              </h2>
            </header>
            <p>
              Далее находится пошаговое руководство по использованию
              CustomServers:
            </p>
            <ol>
              <li>
                Необходимо приобрести лицензию FingerprintSwitcher. Если
                лицензия уже есть, то этот шаг можно пропустить.
              </li>
              <li>
                Необходимо приобрести лицензию CustomServers. Также вы можете
                начать использовать пробную версию.
              </li>
              <li>
                Скопируйте код javascript из личного кабинета и добавьте на свой
                сайт. Страница должна использовать протокол https. 
              </li>
              <li>
                На этом этапе база данных начнет заполняться отпечатками. Вы
                можете открыть панель администратора, чтобы увидеть, как это
                происходит.
              </li>
              <li>
                Наконец, вы можете использовать отпечатки из своей базы в
                BrowserAutomationStudio, установив для параметра «Использовать
                пользовательские серверы» значение true в действии «Получить
                отпечаток». Вы также можете установить параметр с таким же
                названием в FingerprintManager.
              </li>
            </ol>
            <p>
              После установки параметра «Использовать пользовательские серверы»
              система автоматически обнаружит, что у вас есть лицензия
              CustomServers, и отправит вам отпечаток из вашей базы данных.
            </p>
            <p>
              Не забывайте, что вы можете проверить свою административную
              панель, чтобы увидеть, сколько отпечатков в вашей базе, а также
              статистику их использования.
            </p>
            <p>
              Обратите внимание, что использовать CustomServers в BAS или FM
              очень просто. Вам просто нужно установить единственный флаг
              «Использовать пользовательские серверы», и ваш запрос будет
              автоматически перенаправлен в вашу базу данных, авторизация будет
              выполняться через ваш ключ FingerprintSwitcher.
            </p>
            <header className="block-header border-1">
              <h2>
                <span>
                  <div className="corner top left"></div>
                  <div className="corner bottom right"></div>
                  <div className="line-border top"></div>
                  <div className="line-border right"></div>
                  <div className="line-border left"></div>
                  <div className="line-border bottom"></div>
                  Как использовать?
                </span>
              </h2>
            </header>
            <p>
              Предоставление доступа к вашей базе данных не означает
              предоставление доступа к панели администратора, это означает
              только возможность использовать отпечатки из вашей базы с помощью
              ключа FingerprintSwitcher.
            </p>

            <p>
              По умолчанию доступ к вашей базе предоставляется всем ключам
              FingerprintSwitcher в вашем{" "}
              <Link to="https://bablosoft.com/personal/license/FingerprintSwitcher">
                <b>
                  <u>личном кабинете</u>
                </b>
              </Link>
              .
            </p>

            <p>
              Вы также можете предоставить доступ любому другому пользователю
              bablosoft на{" "}
              <Link to="https://customfingerprints.bablosoft.com/admin/settings#database-access">
                <b>
                  <u>странице доступа</u>
                </b>
              </Link>
              . После задания имени пользователя все ключи FingerprintSwitcher
              этого пользователя будут иметь доступ к вашей базе данных. Это
              особенно полезно, если вы являетесь владельцем скрипта и хотите
              предоставить доступ к базе всем пользователям вашего скрипта.
            </p>

            <p>
              Доступ к базе можно отозвать в любой момент на той же странице.
            </p>

            <p>
              Любой, кто будет использовать базу данных(включая владельца),
              должен иметь ключ FingerprintSwitcher.
            </p>

            <p>
              Количество запросов в минуту к CustomServer такое же, как и для
              стандартной базы данных сервиса FingerprintSwitcher. Вы также
              можете сделать этот предел ниже для своей базы данных(но не выше)
              с помощью{" "}
              <Link to="https://customfingerprints.bablosoft.com/admin/settings#api-request-limit">
                <b>
                  <u>настроек ограничений</u>
                </b>
              </Link>
              .
            </p>

            <p>
              Конкретные отпечатки можно загрузить напрямую из базы или сразу
              всю базу данных в{" "}
              <Link to="https://customfingerprints.bablosoft.com/admin/database">
                <b>
                  <u>zip архив</u>
                </b>
              </Link>
              .
            </p>

            <p>
              !ВАЖНО Скачанные отпечатки предназначены только для личного
              использования. Передача их другим пользователям или размещение
              онлайн запрещено. Это также включает в себя встраивание отпечатков
              или ключей в скомпилированный скрипт. Нарушение этих правил
              приведет к блокировке ключа без возможности возврата средств.
              Корректным способом предоставить доступ к вашей базе данных
              является добавление доверенных пользователей на странице
              'Настройки'.
            </p>
            <header className="block-header border-1">
              <h2>
                <span>
                  <div className="corner top left"></div>
                  <div className="corner bottom right"></div>
                  <div className="line-border top"></div>
                  <div className="line-border right"></div>
                  <div className="line-border left"></div>
                  <div className="line-border bottom"></div>
                  Бесплатная версия
                </span>
              </h2>
            </header>
            <p>
              Помимо премиум-версии с полноценным функционалом, у сервиса есть и
              бесплатная версия. Различия между двумя версиями следующие:
            </p>
            <ol>
              <li>
                Бесплатная версия не позволяет загружать отпечатки напрямую, а
                только с помощью действия «Получить отпечаток».
              </li>
              <li>
                Размер персональной базы данных бесплатной версии
                ограничен 300 отпечатками, а премиум-версия позволяет
                хранить 30000.
              </li>
              <li>
                В бесплатной версии только 50% пользователей вашего сайта
                добавляются в вашу базу данных, для премиум-пользователей это
                число составляет 100%.
              </li>
            </ol>
            <p>
              Начать использовать бесплатную версию можно в любой момент, но для
              этого можно иметь ключ FingerprintSwitcher. Ее можно обновить до
              премиум-версии, при этом ваши настройки и база данных будут
              сохранены. Если действие премиум версии закончится, то активной
              станет бесплатная версия.
            </p>
            <Link
              to="https://bablosoft.com/personal/license/FingerprintSwitcher"
              class="btn-with-image"
            >
              <b>Получить бесплатную или платную версии</b>
              <img src={linkImg} alt="" />
            </Link>
          </main>
        </>,
      ],
      videoForPlay: 
        <video
          src="https://wiki.bablosoft.com/lib/exe/fetch.php?media=ru:2021-12-05_15-22-38.mp4"
          controls
        ></video>
      ,
    },
    {
      forScrollClass: "fingerprintDetector",
      title: "FingerprintDetector",
      text: [
        <p>
          Инструмент для специалистов по безопасности, который проверяет
          использует ли сайт любые техники по сбору отпечатков и информирует
          пользователя о них.В результате его работы вы получите подробный отчет
          по каждому действию сайта связанному с отпечатками. Этот инструмент
          может быть полезен, если вы хотите узнать причину возможной блокировки
          сайтом вашего аккаунта.
        </p>,
      ],
      link: "https://fp.bablosoft.com/#fingerprint-detector",
      img: itemImgSecond,
      playBtnImg,
      modal: [
        <>
          <header className="block-header border-1">
            <h2>
              <span>
                <div className="corner top left"></div>
                <div className="corner bottom right"></div>
                <div className="line-border top"></div>
                <div className="line-border right"></div>
                <div className="line-border left"></div>
                <div className="line-border bottom"></div>
                FingerprintDetector
              </span>
            </h2>
          </header>
          <main className="modal__body">
            <p>
              FingerprintDetector создает отчет обо всех использованных техниках
              по сбору отпечатков браузера, используемых на конкретном сайте.
              Все, что вам нужно сделать, чтобы получить этот отчет, это
              посетить любой сайт и нажать на следующую кнопку:
            </p>
            <img src={modalImgSecond[0]} alt="" />
            <p>
              Цифра внутри кнопки обозначает, сколько раз использовались опасные
              методы. В результате вы можете увидеть следующую таблицу:
            </p>
            <img src={modalImgSecond[1]} alt="" />
            <p>
              Все записи сгруппированы по действиям, таким как: загрузка
              страницы, клики мышью, ввод текста и т. д. Это делается для того,
              чтобы понять, в какой именно момент был использован опасный метод.
              Например, свойства экрана могут были получены во время первого
              посещения сайта, а отпечаток canvas только после попытки входа на
              сайт.
            </p>
            <p>
              Записи также группируются по используемому методу и сортируются
              по уровню опасности. Например, на предыдущей странице вы можете
              увидеть, что получения отпечатка canvas было выполнено 4 раза и
              имеет уровень опасности 8, user-agent был получен 10 раз и имеет
              только второй уровень опасности. На сайте создано 7 шрифтов, что
              не опасно, поэтому FingerprintDetector присвоил этой записи только
              третий уровень опасности.
            </p>
            <p>
              Каждая запись имеет контекстное меню, которое ведет к странице с
              описанием используемого метода:
            </p>
            <img src={modalImgSecond[2]} alt="" />
            <p>
              Предыдущая запись содержит описание метода получения отпечатка
              canvas и почему этот метод опасен. Наконец, он показывает
              местоположение в исходном коде, где этот метод был использован:
            </p>
            <img src={modalImgSecond[3]} alt="" />

            <p>
              Эта информация доказывает, что сайт действительно собирает
              отпечатки браузера и она может быть использована для дальнейших
              исследований.
            </p>
            <p>Данное видео демонстрирует, как это работает:</p>
            <Link to="https://youtu.be/jsAuKxqGcak" class="btn-with-image">
              <b>
                <u>https://youtu.be/jsAuKxqGcak</u>
              </b>
              <img src={linkImg} alt="" />
            </Link>
          </main>
          ,
        </>,
      ],
      videoForPlay: <video src={fsVideo} controls></video>,
    },
  ];
  return (
    <article className="dop-finger block-dashed-top block-dashed-sides">
      <div className="container">
        <div className="plus top left">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="plus top right">
          <img src={plusImg} alt="plus" />
        </div>
        <header className="block-header border-1">
          <h2>
            Дополнительные
            <span>
              <div className="corner top left"></div>
              <div className="corner bottom right"></div>
              <div className="line-border top"></div>
              <div className="line-border right"></div>
              <div className="line-border left"></div>
              <div className="line-border bottom"></div>
              инструменты
            </span>
          </h2>
        </header>
        <main className="dop-finger__row">
          {fingerDopItems.map((item) => {
            return (
              <FingerDopItem
                forScrollClass={item.forScrollClass}
                title={item.title}
                text={item.text}
                link={item.link}
                img={item.img}
                playBtn={item.playBtnImg}
                modal={item.modal}
                videoForPlay={item.videoForPlay}
              />
            );
          })}
        </main>
      </div>
    </article>
  );
}

export default FingerDop;
