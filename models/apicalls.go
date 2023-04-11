package models

type UpdateEvents struct {
	LStatus string `json:"leadstatus"`
	FStatus string `json:"followstatus"`
	CompId  int    `json:"compid"`
}

type CompetitionSelection struct {
	CompetitionName string `json:"competitionname"`
}
