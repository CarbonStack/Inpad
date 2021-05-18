import React from 'react'
import styled from '../../../../lib/styled'
import { AppComponent } from '../../../../lib/types'
import { ButtonProps, LoadingButton } from '../../../atoms/Button'
import FormEmoji, { FormEmojiProps } from '../atoms/FormEmoji'
import FormInput, { FormInputProps } from '../atoms/FormInput'
import FormSelect, {
  FormSelectProps,
  SimpleFormSelect,
  SimpleFormSelectProps,
} from '../atoms/FormSelect'
import cc from 'classcat'

export type FormRowButtonProps = ButtonProps & {
  label: React.ReactNode
  spinning?: boolean
}

export type FormRowProps = {
  layout?: 'column' | 'split'
  title?: React.ReactNode
  description?: React.ReactNode
  items?: (
    | {
        type: 'input'
        props: FormInputProps & { ref?: React.Ref<HTMLInputElement> }
      }
    | { type: 'select'; props: FormSelectProps }
    | { type: 'select--string'; props: SimpleFormSelectProps }
    | { type: 'emoji'; props: FormEmojiProps }
    | { type: 'button'; props: FormRowButtonProps }
    | { type: 'node'; element: React.ReactNode }
  )[]
}

const FormRow: AppComponent<{ row: FormRowProps }> = ({ row, className }) => {
  return (
    <Container className={cc(['form__row', className])}>
      {row.title != null && <div className='form__row__title'>{row.title}</div>}
      {row.items != null && (
        <div className='form__row__items'>
          {row.items.map((item, k) => (
            <div
              className={`form__row__item form__row__item--${item.type}`}
              key={`form__row__item--${k}`}
            >
              {item.type === 'input' ? (
                <FormInput {...item.props} />
              ) : item.type === 'select' ? (
                <FormSelect {...item.props} />
              ) : item.type === 'select--string' ? (
                <SimpleFormSelect {...item.props} />
              ) : item.type === 'emoji' ? (
                <FormEmoji {...item.props} />
              ) : item.type === 'button' ? (
                <LoadingButton {...item.props}>
                  {item.props.label}
                </LoadingButton>
              ) : (
                item.element
              )}
            </div>
          ))}
        </div>
      )}
      {row.description != null && (
        <div className='form__row__description'>{row.description}</div>
      )}
    </Container>
  )
}

const Container = styled.div`
  .form__row__description {
    color: ${({ theme }) => theme.colors.text.subtle};
  }

  .form__row__items {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: space-between;
  }

  .form__row__item {
    display: flex;
    align-items: stretch;
  }

  .form__row__item--emoji,
  .form__row__item--button {
    flex: 0 0 auto;
  }

  .form__row__item:not(.form__row__item--emoji):not(.form__row__item--button),
  .form__row__item:not(.form__row__item--emoji):not(.form__row__item--button)
    > * {
    flex: 1 1 auto;
  }

  .form__row__item + .form__row__item {
    margin-left: ${({ theme }) => theme.sizes.spaces.df}px;
  }
`

export default FormRow