import React from 'react'
import GoogleIcon from '@icons/auth/google.svg'
import FacebookIcon from '@icons/auth/facebook.svg'
import Image from 'next/image'

const SignIn = () => {
  return (
    <form className='relative flex size-full h-fit max-w-[436px] shrink flex-col rounded-2xl bg-white'>
      <div className='xs:p-12 xs:pb-6 flex w-full flex-col items-center gap-1 p-6'>
        <div className='text-neutral-80 xs:text-2xl text-lg font-bold'>Log in to Beincom</div>
        <div className='text-neutral-60 mt-1 text-center text-sm font-normal'>The future of community engagement</div>
      </div>

      <div className='xs:px-12 flex w-full flex-1 flex-col space-y-4 px-[42px] pb-[70px]'>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-3'>
            <button
              className='focus-visible:outline-neutral-20 active:ring-neutral-20 disabled:bg-gray-5 disabled:text-gray-40 text-neutral-60 hover:bg-neutral-5 border-neutral-5 relative flex h-10 w-full items-center justify-center space-x-2 whitespace-nowrap rounded-md border bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:border-white focus-visible:outline-2 active:ring-2 disabled:pointer-events-none disabled:!cursor-not-allowed disabled:!ring-0 disabled:focus-visible:!outline-0 [&>svg]:size-5'
              type='button'
            >
              <Image src={GoogleIcon} draggable={false} alt='google-icon' className='h-6 w-[25px]' />
              <div>Google</div>
            </button>
            <button
              className='focus-visible:outline-neutral-20 active:ring-neutral-20 disabled:bg-gray-5 disabled:text-gray-40 text-neutral-60 hover:bg-neutral-5 border-neutral-5 relative flex h-10 w-full items-center justify-center space-x-2 whitespace-nowrap rounded-md border bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:border-white focus-visible:outline-2 active:ring-2 disabled:pointer-events-none disabled:!cursor-not-allowed disabled:!ring-0 disabled:focus-visible:!outline-0 [&>svg]:size-5'
              type='button'
            >
              <Image src={FacebookIcon} draggable={false} alt='facebook-icon' className='h-6 w-[25px]' />
              <div>Facebook</div>
            </button>
          </div>
        </div>
        <div className='flex w-full items-center'>
          <div data-orientation='horizontal' role='none' className='bg-gray-5 m-0 my-2 h-px w-full flex-1 shrink-0' />
          <div className='mx-3 text-xs font-normal text-[rgb(68,79,142)]'>or</div>
          <div data-orientation='horizontal' role='none' className='bg-gray-5 m-0 my-2 h-px w-full flex-1 shrink-0' />
        </div>
        <div className='space-y-4'>
          <div className='space-y-1'>
            <label
              className='text-sm font-medium text-[rgb(68,79,142)] peer-disabled:cursor-not-allowed'
              htmlFor=':r0:-form-item'
            >
              Email
            </label>
            <div className='border-neutral-5 focus-within:shadow-active hover:shadow-hover focus-within:hover:shadow-active focus:shadow-active focus-visible:shadow-active relative flex h-10 w-full cursor-text items-center justify-between rounded-md border bg-white px-3 py-2 text-base focus-within:border-purple-50 focus:border-purple-50 focus-visible:border-purple-50'>
              <input
                placeholder='Your email'
                data-testid='page_login.login_input_email'
                id=':r0:-form-item'
                aria-describedby=':r0:-form-item-description'
                aria-invalid='false'
                className='caret-neutral-60 placeholder:text-neutral-20 autofill:!bg-gray-5 autofill:!text-neutral-60 read-only:bg-gray-5 disabled:bg-gray-5 disabled:text-neutral-20 block h-full w-full text-base font-normal text-[rgb(68,79,142)] placeholder:text-base placeholder:font-normal read-only:cursor-default focus-visible:outline-none disabled:font-normal'
                name='email'
              />
            </div>
          </div>
          <div className='space-y-1'>
            <label
              className='text-sm font-medium text-[rgb(68,79,142)] peer-disabled:cursor-not-allowed'
              htmlFor=':r1:-form-item'
            >
              Password
            </label>
            <div
              className='border-neutral-5 focus-within:shadow-active hover:shadow-hover focus-within:hover:shadow-active focus:shadow-active focus-visible:shadow-active relative flex h-10 w-full cursor-text items-center justify-between rounded-md border bg-white px-3 py-2 text-base focus-within:border-purple-50 focus:border-purple-50 focus-visible:border-purple-50'
              style={{ paddingRight: 44 }}
            >
              <input
                autoComplete='new-password'
                placeholder='Your password'
                data-testid='page_login.login_input_password'
                id=':r1:-form-item'
                aria-describedby=':r1:-form-item-description'
                aria-invalid='false'
                className='text-neutral-60 caret-neutral-60 placeholder:text-neutral-20 autofill:!bg-gray-5 autofill:!text-neutral-60 read-only:bg-gray-5 disabled:bg-gray-5 disabled:text-neutral-20 block h-full w-full text-base font-normal placeholder:text-base placeholder:font-normal read-only:cursor-default focus-visible:outline-none disabled:font-normal'
                type='password'
                name='password'
              />
              <div className='absolute right-3 top-1/2 flex -translate-y-1/2 items-center space-x-1 text-[rgb(68,79,142)]'>
                <div className='flex cursor-pointer items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    className='size-6 text-[rgb(68,79,142)]'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M4.29272 18.2929C3.9022 18.6834 3.9022 19.3166 4.29272 19.7071C4.68325 20.0976 5.31641 20.0976 5.70694 19.7071L19.7069 5.70711C20.0975 5.31658 20.0975 4.68342 19.7069 4.29289C19.3164 3.90237 18.6832 3.90237 18.2927 4.29289L4.29272 18.2929ZM11.9998 19.5C10.9643 19.5 10.0185 19.3455 9.15915 19.0833L10.8283 17.4142C11.2021 17.47 11.5925 17.5 11.9998 17.5C14.8059 17.5 16.8055 16.0778 18.1427 14.5832C18.8111 13.8363 19.2992 13.0857 19.6197 12.5216C19.7347 12.3192 19.8273 12.1423 19.8981 12C19.8273 11.8577 19.7347 11.6808 19.6197 11.4784C19.3519 11.007 18.967 10.4055 18.4578 9.78465L19.8779 8.36458C20.5381 9.14582 21.0264 9.90575 21.3586 10.4904C21.5452 10.8187 21.684 11.0946 21.7777 11.2918C21.8245 11.3904 21.8601 11.4697 21.8849 11.5262C21.8972 11.5544 21.9069 11.577 21.9139 11.5936L21.9223 11.6139L21.925 11.6205L21.926 11.6229L21.9264 11.6239C21.9264 11.6239 21.9267 11.6247 20.9998 12C21.9267 12.3753 21.9264 12.3761 21.9264 12.3761L21.926 12.3771L21.925 12.3795L21.9223 12.3861L21.9139 12.4064C21.9069 12.4229 21.8972 12.4456 21.8849 12.4738C21.8601 12.5303 21.8245 12.6096 21.7777 12.7082C21.684 12.9054 21.5452 13.1813 21.3586 13.5096C20.9867 14.1643 20.4189 15.0387 19.6332 15.9168C18.0626 17.6722 15.5622 19.5 11.9998 19.5ZM20.9998 12L21.9264 11.6239C22.0239 11.8646 22.0239 12.1354 21.9264 12.3761L20.9998 12ZM11.9998 6.5C12.4072 6.5 12.7976 6.52997 13.1714 6.58579L14.8405 4.91667C13.9812 4.65445 13.0354 4.5 11.9998 4.5C8.43743 4.5 5.93706 6.3278 4.36643 8.0832C3.58081 8.96125 3.013 9.83572 2.64105 10.4904C2.4545 10.8187 2.31564 11.0946 2.22201 11.2918C2.17516 11.3904 2.13951 11.4697 2.11479 11.5262C2.10242 11.5544 2.09277 11.577 2.08581 11.5936L2.07737 11.6139L2.07464 11.6205L2.07366 11.6229L2.07325 11.6239C2.07325 11.6239 2.07291 11.6247 2.99983 12L2.07325 11.6239C1.97581 11.8646 1.97547 12.1346 2.07291 12.3753L2.99983 12C2.07291 12.3753 2.07291 12.3753 2.07291 12.3753L2.07366 12.3771L2.07464 12.3795L2.07737 12.3861L2.08581 12.4064C2.09277 12.4229 2.10242 12.4456 2.11479 12.4738C2.13951 12.5303 2.17516 12.6096 2.22201 12.7082C2.31564 12.9054 2.4545 13.1813 2.64105 13.5096C2.97321 14.0942 3.46157 14.8542 4.12177 15.6354L5.54184 14.2153C5.03262 13.5945 4.64778 12.993 4.37999 12.5216C4.265 12.3192 4.17241 12.1423 4.10152 12C4.17241 11.8577 4.265 11.6808 4.37999 11.4784C4.70047 10.9143 5.18859 10.1637 5.85691 9.41679C7.19418 7.9222 9.19381 6.5 11.9998 6.5Z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <button
            className='hover:bg-purple-60 focus-visible:outline-purple-20 active:ring-purple-20 disabled:bg-gray-5 relative flex h-10 w-full items-center justify-center space-x-2 whitespace-nowrap rounded-md bg-[rgba(234_237_242)] px-4 py-2 text-base font-medium text-[rgb(68,79,142)] transition-colors focus-visible:outline-[3px] active:ring disabled:!cursor-not-allowed disabled:text-neutral-50 disabled:!ring-0 disabled:focus-visible:!outline-0 [&>svg]:size-6'
            data-testid='page_login.login_button'
            disabled={false}
            type='submit'
          >
            Log In
          </button>
          <div className='!mt-2 w-full text-center text-xs font-normal text-[rgb(68,79,142)]'>
            By logging in, you agree to our{' '}
            <a target='_blank' className='underline' href='/privacy&terms'>
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
          Don’t have an account?{' '}
          <a className='font-medium text-[rgba(9,97,237)] hover:underline' href='/sign-up'>
            Sign up
          </a>
        </div>
      </div>
    </form>
  )
}

export default SignIn
