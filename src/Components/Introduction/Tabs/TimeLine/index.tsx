import { List } from "./List"
import { Component } from "./styled"

export function TimeLine() {
  return (
    <Component>
      <div className="workSpace">
        <ul>
          <List
            date='2012 to 2014'
            company="MidiData"
            office="WebDesigner"
            desp="fwebnfiube"
          />
          <List
            date='2014 to 2015'
            company="Flamingo College"
            office="Marketing Assistent"
            desp="fwebnfiube"
          />
          <List
            date='2019 to 2021'
            company="NOS"
            office="Seller"
            desp="fwebnfiube"
          />
          <List
            date='2022'
            company="FreeLancer"
            office="Front End Developer"
            desp="fwebnfiube"
          />
        </ul>
      </div>


    </Component>

  )
}