import { useCallback, useState } from 'react'

export type HttpMethodType<T, K> = (params: K) => Promise<T>
export type UseHttpResultType<T, K> = [
  (params?: K) => void,
  { params: K; response: T } | undefined,
  string
]

export const useHttp = <T, K>(
  httpMethod: HttpMethodType<T, K>
): UseHttpResultType<T, K> => {
  const [response, setResponse] = useState<{ params: K; response: T }>()
  const [error, setError] = useState<string>('')

  /**
   * Получение данных
   */
  const getData = useCallback(
    async (params?) => {
      try {
        const resp: T = await httpMethod(params)
        setResponse({ params, response: resp })
      } catch (res) {
        if (res instanceof Error) {
          setError(res?.message)
        }
      }
    },
    [httpMethod]
  )

  return [getData, response, error]
}
