# DAO голосование
Необходимы реализовать смарт контракт, который будет вызывать сигнатуру функции посредством голосования пользователей.
* Написать контракт DAO
* Написать полноценные тесты к контракту
* Написать скрипт деплоя
* Задеплоить в тестовую сеть
* Написать таск на vote, addProposal, finish, deposit.
* Верифицировать контракт

#### Требования
* Для участия в голосовании пользователям необходимо внести  токены для голосования.
* Вывести токены с DAO, пользователи могут только после окончания всех голосований, в которых они участвовали.
* Голосование может предложить только председатель.
* Для участия в голосовании пользователю необходимо внести депозит, один токен один голос.
* Пользователь может участвовать в голосовании одними и теми же токенами, то есть пользователь внес 100 токенов он может участвовать в голосовании №1 всеми 100 токенами и в голосовании №2 тоже всеми 100 токенами.
* Финишировать голосование может любой пользователь по прошествии определенного количества времени установленном в конструкторе.

### Ссылки:
* презентация: https://docs.google.com/presentation/d/1U9iOUNTx2kMJzoPa_v3LnVbf0EGK0Lbrvoa9aewNvLg/edit?usp=sharing
* WEB3: https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html
* ethers: https://docs.ethers.io/v5/api/utils/abi/coder/

### Доп ссылки:
пример работы delegatecall

https://ethernaut.openzeppelin.com/level/0x9451961b7Aea1Df57bc20CC68D72f662241b5493
https://blockchain-academy.hs-mittweida.de/courses/solidity-coding-beginners-to-intermediate/lessons/solidity-5-calling-other-contracts-visibility-state-access/topic/delegatecall/

