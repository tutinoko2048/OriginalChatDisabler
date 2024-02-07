# OriginalChatDisabler
チャットのbroadcastを無効化して非表示にします

## Why?
v1.20.60で`ChatSendBeforeEvent.setTargets`が削除され、`ChatSendBeforeEvent.targets`が追加されました  
ただし`targets`はreadonlyでかつundefinedの状態でイベントが発火するプロパティのため、チャットを非表示にしたままイベントを流す などの機能を使うアドオンは使えなくなります  
(ただキャンセルすることも可能だが他のアドオンとの互換性がなくなるためあまり良くない)  

→ このパックでは古いモジュールの`mojang-minecraft`を利用し、これを別のパックとして追加することで全てのチャットを非表示にすることができます
