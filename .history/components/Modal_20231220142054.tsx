"use client";

import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'



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
			</div>
		</Dialog>
	</Transition>
	</>
  )
  }

export default Modal
