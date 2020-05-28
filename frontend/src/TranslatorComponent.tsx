import React from "react";
import TranslationService from "./translationservice";

type TranslatorState = {
  source: string;
  target: string;
  sourceText: string;
  translatedText: string;
};

class TranslatorComponent extends React.Component<{}, TranslatorState> {
  constructor(props: any) {
    super(props);

    this.state = {
      source: "en",
      target: "de",
      sourceText: "",
      translatedText: ""
    };

    this.translate = this.translate.bind(this);
    this.changeSource = this.changeSource.bind(this);
    this.changeTarget = this.changeTarget.bind(this);
    this.changeSourceText = this.changeSourceText.bind(this);
    this.setTranslatedText = this.setTranslatedText.bind(this);
  }

  render() {
    return (
      <div className="mt-5">
        <div className="row">
          <div className="col-6">
            <select
              className="row mb-2"
              defaultValue={this.state.source}
              onChange={this.changeSource}
            >
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="fr">French</option>
              <option value="tr">Turkish</option>
              <option value="es">Spanish</option>
              <option value="it">Italian</option>
            </select>
            <textarea
              className="row w-100"
              placeholder="Type text here..."
              value={this.state.sourceText}
              onChange={this.changeSourceText}
            ></textarea>
          </div>
          <div className="col-6">
            <select
              className="row mb-2"
              defaultValue={this.state.target}
              onChange={this.changeTarget}
            >
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="fr">French</option>
              <option value="tr">Turkish</option>
              <option value="es">Spanish</option>
              <option value="it">Italian</option>
            </select>
            <textarea
              className="row w-100"
              readOnly
              placeholder="Translation..."
              value={this.state.translatedText}
            ></textarea>
          </div>
        </div>
      </div>
    );
  }

  async changeSource(event: any) {
    await this.setState({ source: event.target.value });
    this.translate();
  }

  async changeTarget(event: any) {
    await this.setState({ target: event.target.value });
    this.translate();
  }

  async changeSourceText(event: any) {
    await this.setState({ sourceText: event.target.value });
    this.translate();
  }

  setTranslatedText(translatedText: string) {
    this.setState({ translatedText: translatedText });
  }

  async translate() {
    const translatedText: string = await TranslationService.translate(
      this.state.source,
      this.state.target,
      this.state.sourceText
    );
    this.setTranslatedText(translatedText);
  }
}

export default TranslatorComponent;
