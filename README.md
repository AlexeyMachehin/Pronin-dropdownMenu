﻿## Dropdown menu

Ссылка на netlify.com: [Pronin-dropdownMenu](https://pronin-dropdownmenu.netlify.app)

***

## Описание:

Dropdown menu на React, Typescript.

На странице по центру расположены два триггера для теста. До них нужно доскроллить (см. превью).

* Дропдаун автоматически определяет сторону открытия контента и раскрывает его по клику или ховеру в ту сторону, где будет больше
места относительно триггера.
* Если дропдаун открыт кликом на триггер, закрыть его можно кликом по триггеру или вне компонента дропдаун, или навести курсором на другой триггер. Дропдаун так же можно открыть и закрыть по ховеру.
* Триггер можно представить любым элементом интерфейса.
* Клик внутри контента не закрывает дропдаун, тогда как клик снаружи или повторный клик в триггер закрывает активный дропдаун.
* Может быть только один активный дропдаун. Если открывается другой, текущий закрывается.
* Если при скролле дропдауна не хватает места для отрисовки, то он перерисовывается в новое место так, чтобы контент отобразился корректно.
* При выходе инициирующего элемента из вьюпорта дропдаун скрывается, а при появлении — отображается снова.
* Клик на пункт меню вызывает соответствующий ему колбэк, после этого дропдаун закрывается.

***

## Стек технологий: 
* React 
* Vite
* Eslint
* Stylelint

***

## Команды:
* Старт проекта: yarn preview
* Сборка проекта: yarn build
* Старт режима разработчика: yarn dev
* stylelint: yarn stylelint
* eslint: yarn eslint
* Удаление node_modules: yarn clean
* Удаление dist: yarn clean-build

***

## Запуск:
Ввести в терминале команды:
* git clone https://github.com/AlexeyMachehin/Pronin-dropdownMenu.git
* yarn
* yarn build
* yarn preview

***

Превью:

https://github.com/AlexeyMachehin/Pronin-dropdownMenu/assets/99137228/a94e107e-2703-44bb-9fc3-78353b08ac14

***

## Техническое задание:

С помощью TypeScript и библиотеки React реализуйте компонент
DropdownMenu.
Используйте только функциональные компоненты.
Контент должен задаваться снаружи компонента. DropdownMenu должен
уметь автоматически определять сторону открытия контента и
раскрывать его по клику и ховеру в ту сторону, где будет больше
места относительно триггера.
Допустимые позиции:
• вниз-вправо,
• вверх-вправо,
• вниз-влево,
• вверх-влево.
Сделайте триггер изменяемым и представьте его любым элементом
интерфейса.
Клик внутри контента не должен закрывать дропдаун, тогда как клик
снаружи или повторный клик в триггер должны закрывать активный
дропдаун.
Может быть только один активный дропдаун. Если открывается другой,
текущий должен быть закрыт.Если при скролле дропдауна не хватает
места для отрисовки, то он должен перерисоваться в новое место так,
чтобы контент отобразился корректно. При выходе инициирующего
элемента из вьюпорта скрывать дропдаун, а про появлении
— отображать снова.
Ширина контента дропдауна должна быть ограничена 260 пикселями.
Для иконок (опционально) можно воспользоваться паком feather-icons .
Избегайте any в типах и постарайтесь типизировать весь компонент.
Для вёрстки используйте любое удобное решение.
Очень хорошо, если клик на пункт меню будет вызывать соответствующий
ему колбэк, а после этого закрывать дропдаун.
Постарайтесь не использовать сторонние библиотеки, ограничьтесь
React и react-dom.
Сопроводите код инструкцией по запуску проекта в README.md
репозитория на GitHub.





