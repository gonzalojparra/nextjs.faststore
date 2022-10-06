import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import { useCartToggleButton } from 'src/sdk/cart/useCartToggleButton'

function CartToggle() {
  const btnProps = useCartToggleButton()

  return (
    <Button
      data-fs-button-cart
      counter={btnProps['data-items']}
      aria-label={`Cart with ${btnProps['data-items']} items`}
      icon={<Icon name="ShoppingCart" width={32} height={32} />}
      {...btnProps}
    />
  )
}

export default CartToggle
