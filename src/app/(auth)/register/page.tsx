'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { InputField, InputFieldPw, Label } from '@/components/ui/input-form'
import { FORM_SIGN_AUTH } from '@/constants/form'
import { ROUTES } from '@/constants/routes'
import authService from '@/service/auth.service'
import { validationSignUpSchema } from '@/utils/validate'

const SignIn = () => {
  const {
    watch,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSignUpSchema),
  })
  const { mutate, isPending } = useMutation({ mutationFn: authService.register })
  const disabled =
    isPending || !watch(FORM_SIGN_AUTH.email) || !watch(FORM_SIGN_AUTH.password) || !watch(FORM_SIGN_AUTH.name)
  const router = useRouter()

  const onSubmit = (data: any) => {
    if (disabled) return
    mutate(
      { email: data.email, name: data.name, password: data.password },
      {
        onSuccess: async (response) => {
          toast.success(response?.message)
          reset()
          router.push(ROUTES.LOGIN)
        },
        onError: (error) => {
          console.error(error)
          toast.error(error?.message)
        },
      }
    )
  }

  const onErrors = (errors: any) => console.error(errors)

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onErrors)}
      className='relative flex size-full h-fit max-w-[436px] shrink flex-col rounded-2xl bg-white'
    >
      <div className='xs:p-12 xs:pb-6 flex w-full flex-col items-center gap-1 p-6'>
        <div className='text-2xl font-bold'>Sign in to Beincom</div>
        <div className='mt-1 text-center text-sm font-normal'>The future of community engagement</div>
      </div>

      <div className='flex w-full flex-1 flex-col space-y-4 px-[42px] pb-[70px]'>
        <div className='space-y-4'>
          <div className='space-y-1'>
            <Label htmlFor={FORM_SIGN_AUTH.name}>Name</Label>
            <InputField
              id={FORM_SIGN_AUTH.name}
              placeholder='Your name'
              {...register(FORM_SIGN_AUTH.name)}
              errorMessage={errors[FORM_SIGN_AUTH.email]?.message}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor={FORM_SIGN_AUTH.email}>Email</Label>
            <InputField
              id={FORM_SIGN_AUTH.email}
              placeholder='Your email'
              {...register(FORM_SIGN_AUTH.email)}
              errorMessage={errors[FORM_SIGN_AUTH.email]?.message}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor={FORM_SIGN_AUTH.password}>Password</Label>
            <InputFieldPw
              id={FORM_SIGN_AUTH.password}
              placeholder='Your password'
              {...register(FORM_SIGN_AUTH.password)}
              errorMessage={errors[FORM_SIGN_AUTH.password]?.message}
            />
          </div>
          <button
            className='relative flex h-10 w-full items-center justify-center space-x-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-base font-medium text-white transition-colors hover:opacity-80 focus-visible:outline-[3px] active:ring disabled:!cursor-not-allowed disabled:bg-[rgba(234_237_242)] disabled:text-[rgb(68,79,142)] disabled:!ring-0 disabled:focus-visible:!outline-0 [&>svg]:size-6'
            disabled={disabled}
            type='submit'
          >
            {isPending ? 'Register...' : 'Register'}
          </button>
          <div className='!mt-2 w-full text-center text-xs font-normal text-[rgb(68,79,142)]'>
            By logging in, you agree to our{' '}
            <a target='_blank' className='underline' href='https://ledat-portfolio.vercel.app/'>
              Privacy &amp; Terms
            </a>
          </div>
          <div className='flex items-center gap-1'>
            <a
              className='mx-auto cursor-pointer text-center !text-sm font-normal text-[rgba(9,97,237)] hover:underline disabled:cursor-not-allowed disabled:text-[rgb(68,79,142)] disabled:no-underline'
              type='button'
              href='/reset-password'
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>

      <div className='xs:p-12 xs:pt-6 w-full p-6'>
        <div className='text-neutral-60 w-full text-center text-sm'>
          Already have an account?{' '}
          <Link className='font-medium text-[rgba(9,97,237)] hover:underline' href={ROUTES.LOGIN}>
            Login
          </Link>
        </div>
      </div>
    </form>
  )
}

export default SignIn
