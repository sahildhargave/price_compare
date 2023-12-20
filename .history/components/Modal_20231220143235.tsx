"use client";

import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';

interface Props{
	productId: string
}
const Modal = ({ productId} : Props) => {
    let [isOpen, setIsOpen] = useState(true);

	const openModel =() => setIsOpen(true);

	const closeModel =() => setIsOpen(false);
  return (
	<>
	<button type="button" className='btn' onClick={ openModel}>
		Track
	</button>
	<Transition appear show={isOpen} as={Fragment}>
		<Dialog as="div" onClose={closeModel} className="dialog-container">
			<div className='min-h-screen px-4 text-center'>
            <Transition.Child
			as={Fragment}
			enter='ease-out duration-300'
			enterFrom='opacity-0'
			enterTo='opacity-100'
			leave='ease-in duration-200'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
			>
				<Dialog.Overlay className='fixed inset-0'/>
			</Transition.Child>

			<span className='inline-block h-screen align-middle'
			aria-hidden="true"
			/>

			<Transition
			as={Fragment}
			enter="ease-out duration-300"
			enterFrom="opacity-0 scale-95"
			enterTo='opacity-100 scale-100'
			leave='ease-in duration-200'
			leaveFrom='opacity-100 scale-100'
			leaveTo='opacity-0 scale-95'
			>
				<div className='dialog-content'>
					<div className='flex flex-col'>
						<div className='flex justify-between'>
							<div className='p-3 border border-gray-200 rounded-10'>
								<Image
								src="/assets/icons/logo.svg"
								alt="logo"
								width={28}
								height={28}
								/>
							</div>


							<Image
							src="/assets/icons/x-close.svg"
							alt="close"
							width={24}
							height={24}
							className='cursor-pointer'
							onClick={closeModel}
							/>
						</div>

						<h4 className='dialog-head_text'>
							
						</h4>
					</div>
				</div>
			</Transition>
			</div>
		</Dialog>
	</Transition>
	</>
  )
  }

export default Modal
