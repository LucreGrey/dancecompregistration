package models

type UpdateEvents struct {
	LStatus string `json:"leadstatus"`
	FStatus string `json:"followstatus"`
	CompId  string `json:"compid"`
}
