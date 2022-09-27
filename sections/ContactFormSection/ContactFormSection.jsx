import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const ContactFormSection = () => {
  const [isSending, setIsSending] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const textAreaMaxLength = 600;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const textAreaValue = watch('message')?.length || 0;

  const onSubmit = async data => {
    if (isSending) return;

    const { name, organization, email, subject, message } = data;

    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        organization,
        email,
        subject,
        message,
      }),
    };

    try {
      setIsSending(true);
      const res = await fetch(
        `https://cabanalabs.com/info/contact/us`,
        settings
      );
      const data = await res.json();

      if (!res.ok) {
        console.log('somethig went wrong', data);
        return;
      }

      setIsMessageSent(true);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (!isMessageSent) return;

    const successMessageTimeout = setTimeout(() => {
      setIsMessageSent(false);
    }, 5000);

    return () => {
      clearTimeout(successMessageTimeout);
    };
  }, [isMessageSent]);

  return (
    <div className='my-20'>
      <form>
        <div className='mb-12 md:mb-20 space-y-12'>
          <div>
            <label
              className='text-base md:text-lg text-swamp font-medium mb-4 block'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='cabana-input w-full md:p-8 text-base'
              type='text'
              name='name'
              id='name'
              defaultValue=''
              {...register('name')}
            />
          </div>
          <div>
            <label
              className='text-base md:text-lg text-swamp font-medium mb-4 block'
              htmlFor='organization'
            >
              Organization
            </label>
            <input
              className='cabana-input w-full md:p-8 text-base'
              type='text'
              name='organization'
              id='organization'
              defaultValue=''
              {...register('organization')}
            />
          </div>
          <div>
            <label
              className='text-base md:text-lg text-swamp font-medium mb-4 block'
              htmlFor='email'
            >
              <span className='text-cabanaBlue'>*</span> Email Address
            </label>
            <input
              className='cabana-input w-full md:p-8 text-base'
              type='email'
              name='email'
              id='email'
              defaultValue=''
              {...register('email', {
                required: {
                  value: true,
                  message: 'This field is required.',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors?.email?.message && (
              <span className='text-sm text-red-500 font-semibold block mt-2'>
                *{errors?.email?.message}
              </span>
            )}
          </div>
          <div>
            <label
              className='text-base md:text-lg text-swamp font-medium mb-4 block'
              htmlFor='subject'
            >
              <span className='text-cabanaBlue'>*</span> Subject
            </label>
            <input
              className='cabana-input w-full md:p-8 text-base'
              type='text'
              name='subject'
              id='subject'
              defaultValue=''
              {...register('subject', {
                required: {
                  value: true,
                  message: 'This field is required.',
                },
              })}
            />
            {errors?.subject?.message && (
              <span className='text-sm text-red-500 font-semibold block mt-2'>
                *{errors?.subject?.message}
              </span>
            )}
          </div>
          <div>
            <label
              className='text-base md:text-lg text-swamp font-medium mb-4 block'
              htmlFor='message'
            >
              <span className='text-cabanaBlue'>*</span> Message
            </label>
            <textarea
              className='cabana-input w-full md:p-8 text-base'
              type='text'
              name='message'
              id='message'
              defaultValue=''
              rows={4}
              maxLength={textAreaMaxLength}
              {...register('message', {
                required: {
                  value: true,
                  message: 'This field is required.',
                },
              })}
            />
            {errors?.message?.message && (
              <span className='text-sm text-red-500 font-semibold block mt-2'>
                *{errors?.message?.message}
              </span>
            )}
            <span className='text-sm text-corduroy font-medium block text-right mt-2'>
              {textAreaValue}/{textAreaMaxLength}
            </span>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <button
            disabled={isSending}
            onClick={handleSubmit(onSubmit)}
            className='button-filled-sm md:button-filled-lg disabled:bg-gray-400 disabled:border-transparent disabled:cursor-wait disabled:text-white w-max'
          >
            Send Message
          </button>
          {isMessageSent && (
            <span className='text-base md:text-lg text-green-600 font-semibold mt-4'>
              The message has been sent.
            </span>
          )}
        </div>
      </form>
    </div>
  );
};
