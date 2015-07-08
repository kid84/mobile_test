require 'sinatra'

class App < Sinatra::Base
  get '/' do
    erb:'haml/index'
  end
end
