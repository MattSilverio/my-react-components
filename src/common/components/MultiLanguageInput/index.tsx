import { Icon } from "@fluentui/react";
import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
import { useRecoilValue } from "recoil";
import { IReactState } from "../../../interfaces/IReactState";
import { ITextInputState, TextInputInitialState } from "../../../interfaces/ITextInputState";
import { dictionary } from "../../../lang";
import { translateToEnglish, translateToPortuguese } from "../../../services/translationService";
import { languageState } from "../../../store/atoms";
import { BrasilIcon } from "../../icons/Brasil";
import { EUAIcon } from "../../icons/EUA";
import { FlatButton } from "../FlatButton";
import { Optional } from "../Optional";
import {
  ErrorText,
  Header,
  InnerInputWrapper,
  InputLimit,
  InputsContainer,
  InputWrapper,
  MiddleBorder,
  TextField,
  Title,
  TranslateLink,
  Translating,
  Wrapper,
} from "./style";

interface MultiLanguageInputProps {
  title?: string;
  statePt: IReactState<ITextInputState>;
  stateEn: IReactState<ITextInputState>;
  placeholder?: string;
  textarea?: boolean;
  customLimit?: number;
  optional?: boolean;
  clearButton?: boolean;
  onlyPt?: boolean;
  onlyEn?: boolean;
}

export const MultiLanguageInput = ({
  title,
  statePt,
  stateEn,
  textarea,
  optional,
  placeholder,
  customLimit = 7000,
  clearButton,
  onlyPt,
  onlyEn,
}: MultiLanguageInputProps) => {
  const [valuePt, setValuePt] = statePt;
  const [valueEn, setValueEn] = stateEn;
  const [leftCharactersPt, setLeftCharactersPt] = useState(customLimit);
  const [leftCharactersEn, setLeftCharactersEn] = useState(customLimit);
  const [isTranslatingPt, setIsTranslatingPt] = useState(false);
  const [isTranslatingEn, setIsTranslatingEn] = useState(false);
  const [translateAgainPt, setTranslateAgainPt] = useState(false);
  const [translateAgainEn, setTranslateAgainEn] = useState(false);
  const language = useRecoilValue(languageState);
  const isPt = language === "Portuguese";

  const handleChangePt = (_: any, v: string) => {
    if (isTranslatingPt) {
      setIsTranslatingPt(false);
    }
    setLeftCharactersPt(customLimit - v.length);
    setValuePt({
      content: v,
      error: "",
    });

    if (valueEn.content !== "") setTranslateAgainEn(true);
  };

  const handleChangeEn = (_: any, v: string) => {
    if (isTranslatingEn) {
      setIsTranslatingEn(false);
    }
    setLeftCharactersEn(customLimit - v.length);
    setValueEn({
      content: v,
      error: "",
    });

    if (valuePt.content !== "") setTranslateAgainPt(true);
  };

  const handleTranslateEnglishField = async () => {
    setTranslateAgainEn(false);
    setIsTranslatingEn(true);
    const translated = await translateToEnglish(valuePt.content);

    setValueEn((prevState) => (prevState.content === valueEn.content ? { content: translated, error: "" } : prevState));
    setIsTranslatingEn(false);
  };

  const handleTranslatePortugueseField = async () => {
    setTranslateAgainPt(false);
    setIsTranslatingPt(true);
    const translated = await translateToPortuguese(valueEn.content);

    setValuePt((prevState) => (prevState.content === valuePt.content ? { content: translated, error: "" } : prevState));
    setIsTranslatingPt(false);
  };

  const handleBlurPt = async () => {
    if (valueEn.content === "" && valuePt.content !== "") {
      handleTranslateEnglishField();
    }
  };

  const handleBlurEn = () => {
    if (valuePt.content === "" && valueEn.content !== "") {
      handleTranslatePortugueseField();
    }
  };

  const clear = () => {
    setValuePt(TextInputInitialState);
    setValueEn(TextInputInitialState);
  };

  return (
    <Wrapper>
      <Header isVisible={!!title}>
        <Title>
          {title}
          {optional && <Optional />}
        </Title>
        {clearButton && (
          <FlatButton icon={<Icon iconName="ClearFormatting" />} onClick={clear} small>
            {dictionary[language].limpar}
          </FlatButton>
        )}
      </Header>
      {isPt ? (
        <>
          <InputsContainer>
            <InputWrapper error={valuePt.error.length !== 0} hide={onlyEn}>
              <BrasilIcon />
              <InnerInputWrapper>
                <TextField
                  value={valuePt.content}
                  onChange={handleChangePt}
                  placeholder={placeholder}
                  multiline={textarea}
                  autoAdjustHeight={textarea}
                  maxLength={customLimit}
                  style={{ resize: "vertical" }}
                  onBlur={handleBlurPt}
                />
                <InputLimit display={leftCharactersPt < 50}>{leftCharactersPt}</InputLimit>
                <Translating display={isTranslatingPt}>
                  <PulseLoader color="var(--green)" size={5} />
                  {dictionary[language].traduzindo}
                </Translating>
                <TranslateLink display={translateAgainPt} onClick={handleTranslatePortugueseField}>
                  {dictionary[language].traduzirNovamente}
                </TranslateLink>
                <ErrorText error={!!valuePt.error}>{valuePt.error}</ErrorText>
              </InnerInputWrapper>
            </InputWrapper>

            <MiddleBorder />

            <InputWrapper error={valueEn.error.length !== 0} hide={onlyPt}>
              <EUAIcon />
              <InnerInputWrapper>
                <TextField
                  value={valueEn.content}
                  onChange={handleChangeEn}
                  placeholder={placeholder}
                  error={valueEn.error.length !== 0}
                  multiline={textarea}
                  autoAdjustHeight={textarea}
                  maxLength={customLimit}
                  style={{ resize: "vertical" }}
                  onBlur={handleBlurEn}
                />
                <InputLimit display={leftCharactersEn < 50}>{leftCharactersEn}</InputLimit>
                <Translating display={isTranslatingEn}>
                  <PulseLoader color="var(--green)" size={5} />
                  {dictionary[language].traduzindo}
                </Translating>
                <TranslateLink display={translateAgainEn} onClick={handleTranslateEnglishField}>
                  {dictionary[language].traduzirNovamente}
                </TranslateLink>
                <ErrorText error={!!valueEn.error}>{valueEn.error}</ErrorText>
              </InnerInputWrapper>
            </InputWrapper>
          </InputsContainer>
        </>
      ) : (
        <>
          <InputsContainer>
            <InputWrapper error={valueEn.error.length !== 0} hide={onlyPt}>
              <EUAIcon />
              <InnerInputWrapper>
                <TextField
                  value={valueEn.content}
                  onChange={handleChangeEn}
                  placeholder={placeholder}
                  error={valueEn.error.length !== 0}
                  multiline={textarea}
                  autoAdjustHeight={textarea}
                  maxLength={customLimit}
                  style={{ resize: "vertical" }}
                  onBlur={handleBlurEn}
                />
                <InputLimit display={leftCharactersEn < 50}>{leftCharactersEn}</InputLimit>
                <Translating display={isTranslatingEn}>
                  <PulseLoader color="var(--green)" size={5} />
                  {dictionary[language].traduzindo}
                </Translating>
                <TranslateLink display={translateAgainEn} onClick={handleTranslateEnglishField}>
                  {dictionary[language].traduzirNovamente}
                </TranslateLink>
                <ErrorText error={!!valueEn.error}>{valueEn.error}</ErrorText>
              </InnerInputWrapper>
            </InputWrapper>

            <MiddleBorder />

            <InputWrapper error={valuePt.error.length !== 0} hide={onlyEn}>
              <BrasilIcon />
              <InnerInputWrapper>
                <TextField
                  value={valuePt.content}
                  onChange={handleChangePt}
                  placeholder={placeholder}
                  multiline={textarea}
                  autoAdjustHeight={textarea}
                  maxLength={customLimit}
                  style={{ resize: "vertical" }}
                  onBlur={handleBlurPt}
                />
                <InputLimit display={leftCharactersPt < 50}>{leftCharactersPt}</InputLimit>
                <Translating display={isTranslatingPt}>
                  <PulseLoader color="var(--green)" size={5} />
                  {dictionary[language].traduzindo}
                </Translating>
                <TranslateLink display={translateAgainPt} onClick={handleTranslatePortugueseField}>
                  {dictionary[language].traduzirNovamente}
                </TranslateLink>
                <ErrorText error={!!valuePt.error}>{valuePt.error}</ErrorText>
              </InnerInputWrapper>
            </InputWrapper>
          </InputsContainer>
        </>
      )}
    </Wrapper>
  );
};
