
import { React, useEffect, useState } from "react";


export const TextBox = ({
  placeholder,
  value,
  name,
  handleChange,
  error,
  reference,
  type,
  title,
  option,
  disabled,
  defaultValue,
  autoFocus = false,
  theme,
  inputTheme,
  exchangeTextBoxTheme,
  style,
  handleBlur = () => {},
}) => {
  const handleTextChange = (e) => {
    // e.preventDefault();
    handleChange(e?.target?.value);
  };

  // console.log("errorYup", error)

  const onTextBlur = (e) => {
    handleBlur(e?.target?.value);
  };

  const [txtType, setTxtType] = useState(type);

//   const { t } = useTranslation([, "common"]);

  const changeType = () => {
    if (txtType === "password") {
      setTxtType("text");
    } else {
      setTxtType("password");
    }
  };

  useEffect(() => {
    if (autoFocus) {
      document.getElementById(name).focus();
    }
  }, [autoFocus]);

  const inpNum = (e) => {
    console.log("sadsads");
    e = e || window.event;
    var charCode = typeof e.which == "undefined" ? e.key : e.which;
    var charStr = String.fromCharCode(charCode);
    if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
  };

  return (
    <div className={theme}>
      <div className="flex flex-row flex-wrap">
        <h2 className="trFET">{title}</h2>
        <span className="text-xs text-gray-400 ml-1 "> {option}</span>

        {/* {type === "password" ? (
          <>
            <button className="ml-1" data-tip="" data-for={name} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#000000"
                  d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"
                ></path>
                <path
                  fill="#FFF"
                  d="M323.2 367.5c-1.4-2-4-2.8-6.3-1.7-24.6 11.6-52.5 23.9-58 25-.1-.1-.4-.3-.6-.7-.7-1-1.1-2.3-1.1-4 0-13.9 10.5-56.2 31.2-125.7 17.5-58.4 19.5-70.5 19.5-74.5 0-6.2-2.4-11.4-6.9-15.1-4.3-3.5-10.2-5.3-17.7-5.3-12.5 0-26.9 4.7-44.1 14.5-16.7 9.4-35.4 25.4-55.4 47.5-1.6 1.7-1.7 4.3-.4 6.2 1.3 1.9 3.8 2.6 6 1.8 7-2.9 42.4-17.4 47.6-20.6 4.2-2.6 7.9-4 10.9-4 .1 0 .2 0 .3 0 0 .2.1.5.1.9 0 3-.6 6.7-1.9 10.7-30.1 97.6-44.8 157.5-44.8 183 0 9 2.5 16.2 7.4 21.5 5 5.4 11.8 8.1 20.1 8.1 8.9 0 19.7-3.7 33.1-11.4 12.9-7.4 32.7-23.7 60.4-49.7C324.3 372.2 324.6 369.5 323.2 367.5zM322.2 84.6c-4.9-5-11.2-7.6-18.7-7.6-9.3 0-17.5 3.7-24.2 11-6.6 7.2-9.9 15.9-9.9 26.1 0 8 2.5 14.7 7.3 19.8 4.9 5.2 11.1 7.8 18.5 7.8 9 0 17-3.9 24-11.6 6.9-7.6 10.4-16.4 10.4-26.4C329.6 96 327.1 89.6 322.2 84.6z"
                ></path>
              </svg>
            </button>
            <ReactTooltip
              id={name}
              place="top"
              effect="solid"
              backgroundColor="black"
            >
              <div className=" text-xs py-1 ">
                {t("common:validation.passwordmustHave")}
                <ul className="list-disc ml-3 text-left">
                  <li>{t("common:validation.pUppercase")}</li>
                  <li>{t("common:validation.pLowerCase")}</li>
                  <li>{t("common:validation.pNumber")}</li>
                  <li>{t("common:validation.pSpecialCh  ar")}</li>
                </ul>
              </div>
            </ReactTooltip>
          </>
        ) : null} */}
      </div>
      <div className="flex flex-row items-center relative">
        <input
          pattern={type === "number" ? "[-+]?[0-9]*[.,]?[0-9]+" : null}
          onCopy={(event) => {
            if (type === "password") event.preventDefault();
          }}
          onPaste={(event) => {
            if (type === "password") event.preventDefault();
          }}
          onWheel={(event) => {
            if (type === "number") {
              event.target.blur();
            }
          }}
          onkeypress={(event) => {
            if (type === "number") {
              var ch = String.fromCharCode(event.key);

              if (!/[0-9]/.test(ch)) {
                event.preventDefault();
                return false;
                // return validate(event)
              }
            }
          }}
          //       onkeypress={(event) =>{

          //           if (type === "number") {
          //                    if (!/[0-9]/.test(event.key)) {
          //   event.preventDefault();
          // }
          //             //return (event.key !=8 && event.key ==0 || (event.key >= 48 && event.key <= 57))
          //         }

          //     }}

          //onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"

          onKeyDown={(event) => {
            if (type === "number") {
              if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                event.preventDefault();
                return false;
              }

              if (event.target.value.toString().length > 9) {
                if (
                  event.key !== "Backspace" &&
                  event.key !== "Tab" &&
                  event.key !== "Delete" &&
                  event.key !== "ArrowLeft" &&
                  event.key !== "ArrowRight"
                ) {
                  event.preventDefault();
                }
              }
              var charCode = event.key;
              if (
                charCode === "e" ||
                charCode === "E" ||
                charCode === "," ||
                charCode === "-" ||
                charCode === "+"
              ) {
                event.preventDefault();
              }
            }
          }}
          autoComplete="off"
          className={`${style} 
          }`}
          defaultValue={value || ""}
          // value={value || ""}
          placeholder={placeholder ? placeholder : ""}
          onChange={(e) => {
            handleTextChange(e);
          }}
          onBlur={(e) => {
            onTextBlur(e);
          }}
          type={txtType ? txtType : null}
          name={name}
          id={name}
          ref={reference}
          disabled={disabled}
        />
        {type === "password" ? (
          <div className={`p-2 absolute -right-5 `}>
            
          </div>
        ) : null}
      </div>

      {error && error !== "showError" && (
        <span className="text-red-600 text-xs pt-2">{error}</span>
      )}
      {/* {type === "password" && error === "showError" ? (
        <div className="text-red-600 text-xs pt-2">
          {t("common:validation.passwordmustHave")}
          <ul className="list-disc ml-5">
            <li>{t("common:validation.pUppercase")}</li>
            <li>{t("common:validation.pLowerCase")}</li>
            <li>{t("common:validation.pNumber")}</li>
            <li>{t("common:validation.pSpecialChar")}</li>
          </ul>
        </div>
      ) : null} */}
    </div>
  );
};
