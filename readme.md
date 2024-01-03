> Fazer a página recarregar
> `location.reload()`

> chama a class .screen1 para dentro do javascript
> `let screen1 = document.querySelector('.screen1')`

> Adiciona um evento | event - ouvidor
> `btnTry.addEventListener('click', handleEventClick)`
> função - muito utilizado no button para adicionar um evento ao ser clicado,

> - `classList.add()` | pode **adiciona** uma classe ao elemento mencionado
> - `classList.remove()` | pode **remove** uma classe do elemento mencionado
> - `classList.toggle()` | irá ~~adicionar e remover consecutivamente~~

---

```Javascript
  event.preventDefault()
```

> 1 - 'nao faça o evento padrao' | Evita a ação padrão (como enviar um formulário) ao apertar o _botão_(button)
>
> - `function handleEventClick(event) {event.preventDefault()}`
> - nesse caso ele foi usado para quebrar e vento do `button` dentro do formulário - quebrando o evento de ao apertar o button ele enviar o formulário - sendo assim a página não recarregará

---

```javascript
 if (isNaN(inputValue) || inputValue < 0 || inputValue > 10)
```

> A expressão condicional inteira é uma combinação dessas três condições usando o operador lógico OR ( || ), que significa "ou". O operador || retorna true se qualquer uma das condições fornecidas for true.

Portanto, a expressão condicional completa verifica se inputValue:

- Não é um número (é NaN) ou
- É menor que 0 ou
- É maior que 10

> `screen1.classList.contains('hide')` // a linha de código verifica se o elemento screen1 possui a classe 'hide'

- `classList`: É uma propriedade de elementos DOM que retorna um objeto DOMTokenList de classes no elemento.
- `contains('hide')`: É um método do DOMTokenList que verifica se a classe 'hide' está presente na lista de classes do elemento.
