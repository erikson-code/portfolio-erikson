import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage'

import withAuth from '../hoc'

const Secret = ({user}) => {

  return (
    <BaseLayout>
      <BasePage>
        {
          <h1>I am secret - {user}

          </h1>
        }
      </BasePage>
    </BaseLayout>

  )
}
export default withAuth(Secret)