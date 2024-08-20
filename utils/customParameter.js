const { defineParameterType } = require('@cucumber/cucumber')

defineParameterType({
    name: 'isOrIsNot',
    regexp: /is|is not/,
    transformer: str => str === 'is',
    useForSnippets: false,
})