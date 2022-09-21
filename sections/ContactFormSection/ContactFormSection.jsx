import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const ContactFormSection = () => {
  const [textAreaLength, setTextAreaLength] = useState(0);

  const textAreaMaxLength = 600;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div className='my-20'>
      <form>
        <div className='mb-12 md:mb-28 space-y-12'>
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
              {...register('email', {
                required: {
                  value: true,
                  message: 'This field is required.',
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
              rows={4}
              maxLength={textAreaMaxLength}
              onChange={e => setTextAreaLength(e.target.value.length)}
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
              {textAreaLength}/{textAreaMaxLength}
            </span>
          </div>
        </div>
        <div className='flex justify-center'>
          <button onClick={handleSubmit(onSubmit)} className='button-filled-lg'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
