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

			</div>
		</Dialog>
	</Transition>
	</>
  )
  }

export default Modal
