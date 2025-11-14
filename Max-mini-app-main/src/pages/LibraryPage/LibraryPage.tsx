import { Spin, Alert } from "antd";
import { useLibraryPage } from "./hooks/useLibraryPage";
import copyIcon from "@/assets/icons/copy.svg";
import eyeIcon from "@/assets/icons/eye.svg";
import chevronLeftIcon from "@/assets/icons/Icon (2).svg";
import s from "./LibraryPage.module.css";

export function LibraryPage() {
  const {
    libraryData,
    isLoading,
    error,
    isPasswordVisible,
    handleCopy,
    togglePasswordVisibility,
    handleBack,
  } = useLibraryPage();

  if (isLoading) {
    return (
      <div className={s.root}>
        <div className={s.content}>
          <div className={s.loaderContainer}>
            <Spin size="large" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !libraryData) {
    return (
      <div className={s.root}>
        <div className={s.content}>
          <Alert
            message="Ошибка загрузки данных библиотеки"
            description="Не удалось загрузить информацию о доступе к библиотеке. Пожалуйста, попробуйте позже."
            type="error"
            showIcon
          />
        </div>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <button
        className={s.backButton}
        onClick={handleBack}
        aria-label="Назад"
      >
        <img
          src={chevronLeftIcon}
          alt="Назад"
          className={s.backIcon}
        />
      </button>
      <div className={s.content}>
        <div className={s.titleBadge}>
          <h1 className={s.title}>Библиотека</h1>
        </div>

        <div className={s.sectionsContainer}>
          <div className={s.infoCard}>
            <p className={s.infoText}>
              Для доступа к электронным ресурсам:
            </p>
          </div>

          <div className={s.stepCard}>
            <div className={s.stepNumber}>1</div>
            <p className={s.stepText}>
              Перейдите на портал по ссылке из доступных ресурсов{" "}
              {libraryData.libraries.length > 0 && (
                <span className={s.stepTextSecondary}>(Указаны ниже)</span>
              )}
            </p>
          </div>

          <div className={s.stepCard}>
            <div className={s.stepNumber}>2</div>
            <p className={s.stepText}>
              Используйте для входа логин и пароль выданный университетом
            </p>
          </div>

          <div className={s.credentialsCard}>
            <div className={s.credentialRow}>
              <p className={s.credentialLabel}>Login</p>
              <div className={s.credentialValue}>
                <span className={s.credentialText}>{libraryData.login}</span>
                <button
                  className={s.copyButton}
                  onClick={() => handleCopy(libraryData.login)}
                  aria-label="Копировать логин"
                >
                  <img src={copyIcon} alt="Копировать" className={s.copyIcon} />
                </button>
              </div>
            </div>

            <div className={s.credentialRow}>
              <p className={s.credentialLabel}>Password</p>
              <div className={s.credentialValue}>
                <button
                  className={s.eyeButton}
                  onClick={togglePasswordVisibility}
                  aria-label={isPasswordVisible ? "Скрыть пароль" : "Показать пароль"}
                >
                  <img src={eyeIcon} alt="Показать пароль" className={s.eyeIcon} />
                </button>
                <span className={s.credentialText}>
                  {isPasswordVisible ? libraryData.password : "••••••"}
                </span>
                <button
                  className={s.copyButton}
                  onClick={() => handleCopy(libraryData.password)}
                  aria-label="Копировать пароль"
                >
                  <img src={copyIcon} alt="Копировать" className={s.copyIcon} />
                </button>
              </div>
            </div>
          </div>

          {libraryData.libraries.length > 0 && (
            <div className={s.librariesCard}>
              <h2 className={s.librariesTitle}>
                Перечень библиотек для вашего вуза:
              </h2>
              <ol className={s.librariesList}>
                {libraryData.libraries.map((library, index) => (
                  <li key={index} className={s.libraryItem}>
                    <a
                      href={library}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s.libraryLink}
                    >
                      {library}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {libraryData.instructions && (
            <div className={s.instructionsCard}>
              <h2 className={s.instructionsTitle}>Инструкция:</h2>
              <div className={s.instructionsText}>
                {libraryData.instructions.split("\n").map((line, index) => (
                  <p key={index} className={s.instructionLine}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

