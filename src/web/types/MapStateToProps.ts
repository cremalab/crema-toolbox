export type MapStateToProps<State, Props, PropsOuter = {}> = (
  state: State,
  propsOuter: PropsOuter,
) => Props
