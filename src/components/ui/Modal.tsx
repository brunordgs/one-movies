import { Children } from '@/shared/interfaces/Children';
import { useEffect, useRef } from 'react';

interface Props extends Children {
	open: boolean;
	onOpen(open: boolean): void;
}

export function Modal({ open, onOpen, children }: Props) {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (open && modalRef.current) {
			modalRef.current.focus();
		}
	}, [open]);

	return (
		<div
			className="bg-black/60 fixed inset-0 z-20 cursor-default"
			onClick={() => onOpen(false)}
			onKeyDown={(e) => e.key === 'Escape' && onOpen(false)}
			role="dialog"
			aria-modal="true"
			tabIndex={0}
		>
			<div className="flex items-center justify-center h-screen">
				<div
					ref={modalRef}
					className="bg-primary p-2 w-[1280px] rounded"
					onClick={(e) => e.stopPropagation()}
				>
					{children}
				</div>
			</div>
		</div>
	);
}
