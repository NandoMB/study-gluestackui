import { ReactNode } from 'react';
import { Button as GlueStackButton, ButtonProps as GlueStackButtonProps } from '../../../gluestack/components';

type ButtonProps = GlueStackButtonProps & {
  action?: 'default' | 'primary' | 'secondary' | 'tertiary',
  variant?: 'solid' | 'outline' | 'link',
  isLoadingText?: string,
  IconLeft?: ReactNode,
  IconRight?: ReactNode
};

export function Button({ children, action, variant, IconLeft, IconRight, isDisabled, isLoading, isLoadingText, ...props }: ButtonProps) {
  const disabled = isDisabled || isLoading;
  return (
    <GlueStackButton action={action} variant={variant} isDisabled={disabled} {...props}>
      {isLoading ? (
        <>
          <GlueStackButton.Spinner />
          {isLoadingText && <GlueStackButton.Text>{isLoadingText}</GlueStackButton.Text>}
        </>
      ) : (
        <>
          {IconLeft && IconLeft}
          <GlueStackButton.Text>{children as ReactNode}</GlueStackButton.Text>
          {IconRight && IconRight}
        </>
      )}
    </GlueStackButton>
  )
}
