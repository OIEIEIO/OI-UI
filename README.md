# OI-UI - A simple app for LLMs

OI-UI is a native mobile frontend for LLMs.

Run LLMs on device or connect to various commercial or open source APIs. OI-UI aims to provide a mobile-friendly interface with fine-grained control over chat structuring.


Chat With Characters or Assistants

Use on-device Models or APIs

Modify And Customize

Personalize Yourself

## Features:

-   Run LLMs on-device in Local Mode
-   Connect to various APIs in Remote Mode
-   Chat with characters. (Supports the Character Card v2 specification.)
-   Create and manage multiple chats per character.
-   Customize Sampler fields and Instruct formatting
-   Integrates with your device’s text-to-speech (TTS) engine

## Remote Mode

Remote Mode allows you to connect to a few common APIs from both commercial and open source projects.

### Open Source Backends:

-   koboldcpp
-   text-generation-webui
-   Ollama

### Dedicated API:

-   OpenAI
-   Claude _(with ability to use a proxy)_
-   Cohere
-   Open Router
-   Mancer
-   AI Horde

### Generic backends:

-   Generic Text Completions
-   Generic Chat Completions

_These should be compliant with any Text Completion/Chat Completion backends such as Groq or Infermatic._

### Custom APIs:

## Development

### Android

## Acknowledgement

-   [Vali-98] (https://github.com/Vali-98/ChatterUI) - the original UI creator
ChatterUI
-   [llama.cpp](https://github.com/ggerganov/llama.cpp) - the underlying engine to run LLMs
-   [llama.rn](https://github.com/mybigday/llama.rn) - the original react-native llama.cpp adapter
