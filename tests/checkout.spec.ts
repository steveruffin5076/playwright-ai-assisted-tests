import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('complete checkout flow places an order', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addItemToCart('sauce-labs-backpack').click();
  await inventoryPage.cartIcon.click();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.checkoutButton.click();
  await checkoutPage.fillCheckoutInfo('Steve', 'Chong', '43000');
  await checkoutPage.continueButton.click();
  await checkoutPage.finishButton.click();

  await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
});