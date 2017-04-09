<a name="censor"></a>

## censor(text, forbiddenWords) ⇒ <code>string</code>
Returns a string where all forbidden words have been replaced with *****

**Kind**: global function  
**Returns**: <code>string</code> - - The censored text

As you can see from the examples below, a each instance of a word in the given
string will be replaced by some *** (as many as there are letters). This
replacement is case insensitive and multiple occurences will all be
replaced.

Let'S define as a word every sequence of characters that is not whitespace,
or any of (.,!?).  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | The cleartext input |
| forbiddenWords | <code>Array.&lt;string&gt;</code> | The words to replace |

**Example**  
Here are some usage-examples and their return-values

```js
censor('Some text', [])
// -> 'Some text'

censor('Fun fact', ['fun'])
// -> '*** fact'

censor('A rose is a rose', ['a', 'Rose'])
// -> '* **** is * ****'

censor('First sentence. Second sentence!', ['sentence'])
// -> 'First *******. Second *******!'
```
