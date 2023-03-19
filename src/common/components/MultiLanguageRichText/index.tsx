import React, { useState } from "react";

import { L10n } from "../../../../node_modules/@syncfusion/ej2-base";
import {
  HtmlEditor,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
  ToolbarType,
} from "@syncfusion/ej2-react-richtexteditor";
import { ptBr } from "./lang";
import { Container, Field, Label } from "./style";
import { ITextInputState } from "../../../interfaces/ITextInputState";
import { IReactState } from "../../../interfaces/IReactState";
import { translateToEnglish, translateToPortuguese } from "../../../services/translationService";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../store/atoms";
import { EUAIcon } from "../../icons/EUA";
import { BrasilIcon } from "../../icons/Brasil";
import { TranslateLink, Translating } from "../MultiLanguageInput/style";
import { PulseLoader } from "react-spinners";
import { dictionary } from "../../../lang";
import "./styles.syncfusion";

L10n.load(ptBr);

const items = {
  enable: true,
  enableFloating: true,
  type: ToolbarType.Scrollable,
  items: ["Bold", "Italic", "Underline", "Formats", "Alignments", "|", "CreateLink", "|", "Undo", "Redo"],
  itemConfigs: {},
};

interface IMultiLanguageRichText {
  label: string;
  statePt: IReactState<ITextInputState>;
  stateEn: IReactState<ITextInputState>;
}

interface ChangeEvent {
  value: string;
  name: string;
}

export const MultiLanguageRichText = ({ label, statePt, stateEn }: IMultiLanguageRichText) => {
  const [valuePt, setValuePt] = statePt;
  const [valueEn, setValueEn] = stateEn;
  const [isTranslatingPt, setIsTranslatingPt] = useState(false);
  const [isTranslatingEn, setIsTranslatingEn] = useState(false);
  const [translateAgainPt, setTranslateAgainPt] = useState(false);
  const [translateAgainEn, setTranslateAgainEn] = useState(false);
  const language = useRecoilValue(languageState);

  const handleChangePt = (event: ChangeEvent) => {
    if (isTranslatingPt) {
      setIsTranslatingPt(false);
    }

    if (valueEn.content !== "" && !!event.value) setTranslateAgainEn(true);

    if (valueEn.content === "" && !!event.value) {
      handleTranslateEnglishField(event.value);
    }

    setValuePt({
      content: event.value,
      error: "",
    });
  };

  const handleTranslateEnglishField = async (textToTranslate: string) => {
    setTranslateAgainEn(false);
    setIsTranslatingEn(true);
    const translated = await translateToEnglish(textToTranslate);
    setValueEn((prevState) => (prevState.content === valueEn.content ? { content: translated, error: "" } : prevState));
    setIsTranslatingEn(false);
  };

  const handleChangeEn = (event: ChangeEvent) => {
    if (isTranslatingPt) {
      setIsTranslatingPt(false);
    }

    if (valuePt.content !== "" && !!event.value) setTranslateAgainPt(true);

    if (valuePt.content === "" && !!event.value) {
      handleTranslatePortugueseField(event.value);
    }

    setValueEn({
      content: event.value,
      error: "",
    });
  };

  const handleTranslatePortugueseField = async (textToTranslate: string) => {
    setTranslateAgainPt(false);
    setIsTranslatingPt(true);
    const translated = await translateToPortuguese(textToTranslate);

    setValuePt((prevState) => (prevState.content === valuePt.content ? { content: translated, error: "" } : prevState));
    setIsTranslatingPt(false);
  };

  return (
    <Container>
      <Label>{label}</Label>
      {language == "Portuguese" ? (
        <>
          <Field>
            <BrasilIcon />
            <RichTextEditorComponent
              className="richText_class"
              toolbarSettings={items}
              locale="pt-BR"
              value={valuePt.content}
              change={handleChangePt}
            >
              <Inject services={[Toolbar, Link, HtmlEditor, QuickToolbar]} />
            </RichTextEditorComponent>
            <Translating display={isTranslatingPt}>
              <PulseLoader color="var(--green)" size={5} />
              {dictionary[language].traduzindo}
            </Translating>
            <TranslateLink display={translateAgainPt} onClick={() => handleTranslatePortugueseField(valueEn.content)}>
              {dictionary[language].traduzirNovamente}
            </TranslateLink>
          </Field>
          <Field>
            <EUAIcon />
            <RichTextEditorComponent
              className="richText_class"
              toolbarSettings={items}
              locale="pt-BR"
              value={valueEn.content}
              change={handleChangeEn}
            >
              <Inject services={[Toolbar, Link, HtmlEditor, QuickToolbar]} />
            </RichTextEditorComponent>
            <Translating display={isTranslatingEn}>
              <PulseLoader color="var(--green)" size={5} />
              {dictionary[language].traduzindo}
            </Translating>
            <TranslateLink display={translateAgainEn} onClick={() => handleTranslateEnglishField(valuePt.content)}>
              {dictionary[language].traduzirNovamente}
            </TranslateLink>
          </Field>
        </>
      ) : (
        <>
          <Field>
            <EUAIcon />
            <RichTextEditorComponent
              className="richText_class"
              toolbarSettings={items}
              locale="en-US"
              value={valueEn.content}
              change={handleChangeEn}
            >
              <Inject services={[Toolbar, Link, HtmlEditor, QuickToolbar]} />
            </RichTextEditorComponent>
            <Translating display={isTranslatingEn}>
              <PulseLoader color="var(--green)" size={5} />
              {dictionary[language].traduzindo}
            </Translating>
            <TranslateLink display={translateAgainEn} onClick={() => handleTranslateEnglishField(valuePt.content)}>
              {dictionary[language].traduzirNovamente}
            </TranslateLink>
          </Field>
          <Field>
            <BrasilIcon />
            <RichTextEditorComponent
              className="richText_class"
              toolbarSettings={items}
              locale="en-US"
              value={valuePt.content}
              change={handleChangePt}
            >
              <Inject services={[Toolbar, Link, HtmlEditor, QuickToolbar]} />
            </RichTextEditorComponent>
            <Translating display={isTranslatingPt}>
              <PulseLoader color="var(--green)" size={5} />
              {dictionary[language].traduzindo}
            </Translating>
            <TranslateLink display={translateAgainPt} onClick={() => handleTranslatePortugueseField(valueEn.content)}>
              {dictionary[language].traduzirNovamente}
            </TranslateLink>
          </Field>
        </>
      )}
    </Container>
  );
};
