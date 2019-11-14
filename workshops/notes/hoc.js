import React from 'react'

// Higher Order Function
const add = a => b => a + b

// Regular Components
const Hello1 = props => <h1>{props.message}</h1>
const Hello2 = props => <h1>{props.message}</h1>

// Higher Order Component
const withMessage = message => Component => <Component message={message} />

// HOC usage
const ComponentWithMessage = withMessage('Goodbye!')(Hello2)

// Partial application
const withGoodbye = withMessage('Goodbye!')

// Regular components with message prop
<Hello2 message='Goodbye!'/>
<A message='Goodbye!' />
<B message='Goodbye!' />

// Higher order components with message prop injected
withGoodbye(Hello2)
withGoodbye(A)
withGoodbye(B)
withGoodbye(C)









const ComponentWithRouter = withRouter(Logo)