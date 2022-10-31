import clsx from 'clsx';

export function Container({ children, className }: React.ComponentPropsWithoutRef<'div'>) {
	return <div className={clsx('container', className)}>{children}</div>;
}
