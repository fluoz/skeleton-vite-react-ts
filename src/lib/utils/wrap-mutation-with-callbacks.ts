import { UseMutationOptions, useMutation } from "@tanstack/react-query";

export function useWrappedMutation<
  TVariables,
  TData = unknown,
  TContext = unknown,
>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  defaultOptions?: UseMutationOptions<TData, Error, TVariables, TContext>,
) {
  const mutation = useMutation<TData, Error, TVariables, TContext>({
    mutationFn,
    ...defaultOptions,
  });

  const mutateWithCallbacks = (
    variables: TVariables,
    callbacks?: {
      onSuccess?: (data: TData) => void;
      onError?: (error: Error) => void;
      onSettled?: () => void;
    },
  ) => {
    mutation.mutate(variables, {
      onSuccess: (data, ...rest) => {
        defaultOptions?.onSuccess?.(data, ...rest);
        callbacks?.onSuccess?.(data);
      },
      onError: (error, ...rest) => {
        defaultOptions?.onError?.(error, ...rest);
        callbacks?.onError?.(error);
      },
      onSettled: (...rest) => {
        defaultOptions?.onSettled?.(...rest);
        callbacks?.onSettled?.();
      },
    });
  };

  return {
    ...mutation,
    mutate: mutateWithCallbacks,
  };
}
